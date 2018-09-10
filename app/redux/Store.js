/**
 * Created by jason.gong on 2018/09/10.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from '../redux/reducers/Index';

//添加thunk中间件，支持异步处理
const middlewares = [thunk];

//添加开发者工具，便于调试
const storeEnhancers = compose(
    applyMiddleware(...middlewares)
);

//创建store
export default (initialState) => {
    const store = createStore(
        reducer,
        initialState,
        storeEnhancers
    )
    return store
}