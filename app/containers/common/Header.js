/**
 * Created by Denny.liu on 2017/6/14.
 */
/* 引入需要的控件 */
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet, StatusBar, Platform, TouchableOpacity} from "react-native";
import ScreenUtil from "../../utils/ScreenUtil";
import Util from "../../utils/Util";

export default class Header extends React.Component {

    static propTypes = {
        showStatusBar: PropTypes.bool, //是否控制状态栏
        showBackIcon: PropTypes.bool, //是否显示左侧按钮
        backClick: PropTypes.func,   // 返回事件
        backIcon: PropTypes.number,  // 返回图标
        titleText: PropTypes.string,  // 标题名
        rightIcon: PropTypes.number, //右侧按钮图标
        rightIconStyle: PropTypes.object,    //右侧按钮图标样式
        rightText: PropTypes.string,  // 右侧文字按钮
        rightClick: PropTypes.func,    // 右侧点击
        thisComponent: PropTypes.object,    // 当前Component
        yellowStyle: PropTypes.bool, //黄色风格
        iconWidth: PropTypes.number,    //右侧图标的宽度
    };

    //参数默认值
    static defaultProps = {
        showStatusBar: true,
        showBackIcon: true,
        backIcon: require('./../../img/common/back.png'),
        yellowStyle: false,
        rightText: '',
        iconWidth: ScreenUtil.scaleSize(50)
    };

    constructor(props) {
        super(props);
        this._backClick = this._backClick.bind(this);
        this._rightClick = this._rightClick.bind(this);
    }

    //返回事件
    _backClick() {
        if (this.props.backClick) {   // 在设置了回调函数的情况下
            this.props.backClick(this.props.thisComponent);
        }
    }

    //右侧图标/文字的点击事件
    _rightClick() {
        if (this.props.rightClick) {   // 在设置了回调函数的情况下
            this.props.rightClick(this.props.thisComponent);  // 回调Title和Tag
        }
    }

    //判断图片地址是否为空
    checkImage(imgSource) {
        if (imgSource != null && imgSource != '') {
            return true;
        }

        return false;
    }

    //判断字符串是否为空
    checkText(txt) {
        if (txt != null && txt != '') {
            return true;
        }

        return false;
    }

    //渲染右侧icon/文字
    renderRightMenu() {
        if (this.checkImage(this.props.rightIcon)) {
            return (
                //图标
                <TouchableOpacity style={[styles.rightIconBox, {width: this.props.iconWidth}]}
                                  onPress={this._rightClick}>
                    <Image
                        source={this.props.rightIcon}
                        style={this.props.rightIconStyle}/>
                </TouchableOpacity>
            )
        } else {
            if (this.checkText(this.props.rightText)) {
                var color = '#FFAA00';

                //判断页面风格，是否全黄，从而确定按钮颜色
                if (this.props.yellowStyle) {
                    color = 'white';
                }

                return (
                    //文字
                    <TouchableOpacity style={[styles.rightIconBox, {width: this.props.iconWidth}]}
                                      onPress={this._rightClick}>
                        <Text style={[styles.moreTxt, {color: color}]}>{this.props.rightText}</Text>
                    </TouchableOpacity>
                )
            } else {
                return (
                    <View style={[styles.rightIconBox, {width: this.props.iconWidth}]}></View>
                );
            }
        }
    }

    //渲染状态栏
    renderStatusBar() {
        if(this.props.showStatusBar) {
            return Platform.OS == 'ios' ? <StatusBar barStyle="dark-content"/>
                : <StatusBar barStyle="light-content"/>
        }
        return null;
    }

    render() {
        var color = '#666666';
        var bgColor = '#ffffff';
        var borderBottomWidth = ScreenUtil.scaleSize(1);

        //根据传入的页面风格，设置字体颜色，背景色
        if (this.props.yellowStyle) {
            color = 'white';
            bgColor = 'transparent';
            borderBottomWidth = 0;
        }

        return (
            <View style={[styles.menuContainer, {backgroundColor: bgColor, borderBottomWidth: borderBottomWidth}]}>
                { this.renderStatusBar() }
                {
                    this.props.showBackIcon ? (
                        <TouchableOpacity style={[styles.backIconBox, {width: this.props.iconWidth}]}
                                          onPress={this._backClick}>
                            <Image
                                source={this.props.backIcon}
                                style={styles.iconImg}/>
                        </TouchableOpacity>
                    ) : (<View style={styles.backIconBox}/>)}
                <Text style={[styles.titleTxt, {color: color}]}>{this.props.titleText}</Text>
                {
                    this.renderRightMenu()
                }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        paddingTop: Platform.OS === 'ios' ? ScreenUtil.scaleSize((Util.isIphoneX() ? 0 : 36)) : 0,  // 处理iOS状态栏
        height: (Platform.OS === 'ios') ? ScreenUtil.scaleSize((Util.isIphoneX() ? 92 : 128)) : ScreenUtil.scaleSize(92),
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderBottomWidth: ScreenUtil.scaleSize(1),
        borderBottomColor: '#F1F1F1'
    },
    backIconBox: {
        width: ScreenUtil.scaleSize(50),
        height: (Platform.OS === 'ios') ? ScreenUtil.scaleSize((Util.isIphoneX() ? 92 : 128)) : ScreenUtil.scaleSize(92),
        justifyContent: 'center',
        paddingLeft: ScreenUtil.scaleSize(10),
    },
    rightIconBox: {
        width: ScreenUtil.scaleSize(50),
        height: (Platform.OS === 'ios') ? ScreenUtil.scaleSize(70) : ScreenUtil.scaleSize(50),
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: ScreenUtil.scaleSize(10),
    },
    iconImg: {
        width: ScreenUtil.scaleSize(12),
        height: ScreenUtil.scaleSize(20),
    },
    titleTxt: {
        flex: 1,
        fontSize: ScreenUtil.setSpText(12),
        color: '#666666',
        textAlign: 'center'
    },
    moreTxt: {
        fontSize: ScreenUtil.setSpText(10),
        color: '#FFAA00',
    },
});