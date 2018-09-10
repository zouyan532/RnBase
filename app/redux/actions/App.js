/**
 * Created by jason.gong on 2018/09/10.
 */
import * as types from '../../constant/ActionTypes';

/**
 * 更改状态
 * @param state
 * @returns {{type, state: *}}
 */
export const changeState = (state) => {
	return {
		type: types.APP_CHANGE_STATE,
		state: state,
	}
}