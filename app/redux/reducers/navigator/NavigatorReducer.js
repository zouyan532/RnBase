/**
 * Created by jason.gong on 2018/09/10.
 */
import {StackActions,NavigationActions} from 'react-navigation';

import {PrimaryNav} from '../../../containers/AppNavigator';
import * as types from '../../../constant/ActionTypes';
import GuidePage from "../../../containers/mainScreen/GuidePage";
import Store from 'react-native-simple-store';
import API from "../../../utils/API";

// According to the param 'type', get the route name and return.
function getRouteName(type) {
    let routeName = '';
    switch (type) {
    }
    return routeName;
}


//默认页面
const initialState = PrimaryNav.router.getStateForAction(PrimaryNav.router.getActionForPathAndParams("GuidePage"));//GuidePage

/**
 * According to the type, navigate to the layout screen of matching
 */
export default nav = (state = initialState, action) => {
    let nextState;
    if (action.type != types.BACK) {
        const currentRoute = state.routes[state.index]

        // TODO: Is this correct for nested navigators (action != null)?
        if (currentRoute.routeName == getRouteName(action.type)) {
            return state
        }
    }

    switch (action.type) {
        case types.NA_SECOND:
            nextState = PrimaryNav.router.getStateForAction(
                StackActions.push({
                    routeName:"SecondPage"
                }),
                state
            )
            break;
        case types.BACK:
            nextState = PrimaryNav.router.getStateForAction(
                StackActions.popToTop(),
                state
            );
            break;
    }

    return nextState || state;
}
