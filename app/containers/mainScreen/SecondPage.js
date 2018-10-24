/**
 * Created by jason.gong on 2018/09/10.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Dimensions, Image, Platform, View, TouchableOpacity, PixelRatio, Text} from "react-native";
import {back} from '../../redux/actions/navigator/Navigator';

export const deviceWidth = Dimensions.get('window').width;      //设备的宽度
export const deviceHeight = Dimensions.get('window').height;    //设备的高度
import API from "../../utils/API";
import ScreenUtil from "../../utils/ScreenUtil";
import Store from 'react-native-simple-store';

class SecondPage extends Component {
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
                <TouchableOpacity
                    onPress={()=>{
                        this.props.back()
                    }}
                >
                    <Text>secondPage</Text>
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
        back:back
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
