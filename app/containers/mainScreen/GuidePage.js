/**
 * Created by jason.gong on 2018/09/10.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Dimensions, Image, Platform, View, TouchableOpacity, PixelRatio, Text} from "react-native";
import {navigateToSecond} from '../../redux/actions/navigator/Navigator';

export const deviceWidth = Dimensions.get('window').width;      //设备的宽度
export const deviceHeight = Dimensions.get('window').height;    //设备的高度
import API from "../../utils/API";
import ScreenUtil from "../../utils/ScreenUtil";
import Store from 'react-native-simple-store';
import Util from "../../utils/Util";

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
        const willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            payload => {
                // console.debug('didBlur', payload);
                Util.showToast("获得焦点触发？")
            }
        );
        const willBlurSubscription = this.props.navigation.addListener(
            'willBlur',
            payload => {
                // console.debug('didBlur', payload);
                Util.showToast("失去焦点触发？")
            }
        );
    }

    componentWillUnmount() {
        willFocusSubscription.remove()
        willBlurSubscription.remove()
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
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigateToSecond()
                    }}
                >
                    <Text>demo</Text>
                </TouchableOpacity>
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
        navigateToSecond:navigateToSecond
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GuidePage);
