/**
 * Created by jason.gong on 2018/09/10.
 */
import * as types from '../../constant/ActionTypes';

//初始化状态
const initialState = {
	routeName: '',      //当前页面名字
	isMain: true,       //是否在主页
	backLock: false,    //锁定返回
	currentTab: 'Login',     //当前tab
}

/**
 * 根据type，保存state到store，更新虚拟dom tree
 * @param state
 * @param action
 * @returns {*}
 */
const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.APP_CHANGE_STATE:
			return {...state, ...action.state}
		default:
			return state;
	}
}

export default appReducer;