/**
 * Created by sky.qian on 11/20/2017.
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {
	View,
	Text,
	Image,
	StyleSheet,
	StatusBar,
	Platform,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Animated,
	TextInput,
	ActivityIndicator,
	TouchableHighlight,
	Modal,
} from "react-native";
import ScreenUtil, {deviceHeight, deviceWidth} from "../../utils/ScreenUtil";
import Message from '../../constant/Message';

export default class Loading extends React.Component {
	static propTypes = {
		size: PropTypes.string,    //指示器尺寸
		isShow: PropTypes.bool,    //是否显示
	};

	//参数默认值
	static defaultProps = {
		size: 'large',
		isShow: false,
	};

	render() {
		return (
			<Modal
				animationType={"none"}
				transparent={true}
				visible={this.props.isShow}
			>
				<View style={{
					flex: 1,
					height: deviceHeight,
					width: deviceWidth,
					justifyContent: 'center',
				}}>
					<View style={{
						width: ScreenUtil.scaleSize(300),
						height: ScreenUtil.scaleSize(300),
						backgroundColor: '#000000',
						opacity: 0.85,
						borderRadius: ScreenUtil.scaleSize(12),
						justifyContent: 'center',
						alignItems: 'center',
						zIndex: 1000,
						alignSelf: 'center',
					}}>
						<ActivityIndicator
							animating={true}
							color="white"
							size={this.props.size} />
						<Text style={{
							fontSize: ScreenUtil.setSpText(9),
							marginTop: ScreenUtil.scaleSize(20),
							color: 'white',
						}}>{Message.LOADING}</Text>
					</View>
				</View>
			</Modal>
		)
	}
}