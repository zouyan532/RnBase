/**
 * Created by jason.gong on 2018/09/10.
 */

import {combineReducers} from 'redux';
import App from '../reducers/AppReducer';
import nav from '../reducers/navigator/NavigatorReducer';
//通过combineReducers 合并所有reducer
export default combineReducers({
    App,
    nav
})
