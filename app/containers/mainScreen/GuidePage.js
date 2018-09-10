/**
 * Created by jason.gong on 2018/09/10.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Dimensions, Image, Platform, View, TouchableWithoutFeedback, PixelRatio,Text} from "react-native";
import {
} from '../../redux/actions/navigator/Navigator';

export const deviceWidth = Dimensions.get('window').width;      //设备的宽度
export const deviceHeight = Dimensions.get('window').height;    //设备的高度
import API from "../../utils/API";
import ScreenUtil from "../../utils/ScreenUtil";
import Store from 'react-native-simple-store';

class GuidePage extends Component {
    static navigationOptions = {
        header: null
    }

    // 构造
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <View
                style={{
                    position: 'relative',
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                }}
            >
              <Text>demo</Text>
            </View>

        )
    }
}

function mapStateToProps(state) {
    return {
        state: state.Guide,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GuidePage);
