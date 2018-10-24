/**
 * Created by jason.gong on 2018/09/10.
 */
import * as types from "../../../constant/ActionTypes";
import Util from "../../../utils/Util";
import Message from "../../../constant/Message";

//返回上个页面
export const back = () => {
    return {
        type: types.BACK,
    }
}

export const navigateToSecond = ()=>{
    return{
        type:types.NA_SECOND
    }

}







