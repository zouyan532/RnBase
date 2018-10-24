import {AppRegistry} from 'react-native';

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './app/redux/Store';
// import App from './app/containers/App';
import store from './app/redux/Store'
import ReduxNavigation from "./app/containers/ReduxNavigation"
//获取store
// const store = configureStore();


export default class Root extends Component {
    render() {
        return (
            //store覆盖整改项目
            <Provider store={store}>
                <ReduxNavigation />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('ReactNativeNavigationDemo', () => Root);
