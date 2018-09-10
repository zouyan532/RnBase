/**
 * Created by jason.gong on 2018/09/10.
 */
import React, {Component} from "react";
import Store from "react-native-simple-store";
import {
    AppState,
    Platform,
    BackHandler,
    ToastAndroid,
    BackAndroid,
    NativeModules,
    NativeEventEmitter,
    DeviceEventEmitter
} from "react-native";
import {StackNavigator, addNavigationHelpers} from "react-navigation";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Util from "../utils/Util";
import {back, } from "../redux/actions/navigator/Navigator";
import {changeState} from "../redux/actions/App";
import ScreenUtil from "../utils/ScreenUtil"
import GuidePage from './mainScreen/GuidePage';
//App路由栈配置
export const AppNavigator = StackNavigator({
    GuidePage: {screen: GuidePage},
}, {
    //initialRouteName: 'Login',
    navigationOptions: {
        headerTitleStyle: {
            alignSelf: 'center',
            fontSize: ScreenUtil.setSpText(12),
            fontWeight: '400',
            color: '#666666'
        },
        headerStyle: {
            height: ScreenUtil.scaleSize(Platform.OS == 'ios' ? (Util.isIphoneX() ? 93 : 128) : 93),
            backgroundColor: '#FFFFFF',
        },
        gesturesEnabled: false
    }
},)

class App extends Component {
    componentDidMount() {
        console.disableYellowBox = true;
        console.warn('YellowBox is disabled.');
        BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }

    componentWillUnmount() {
    }

    onBackAndroid() {

    }

    render() {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })}
            />
        );
    }
}


//注入redux nav reducer
const mapStateToProps = state => ({
    nav: state.nav,
    state: state.App,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

//将App交由redux控制
export default connect(mapStateToProps, mapDispatchToProps)(App);

