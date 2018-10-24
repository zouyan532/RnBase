import { createStackNavigator } from 'react-navigation'
import { createReactNavigationReduxMiddleware, reduxifyNavigator } from 'react-navigation-redux-helpers'
import GuidePage from './mainScreen/GuidePage';
// import styles from './Styles/NavigationStyles'

// Manifest of possible screens
export const PrimaryNav = createStackNavigator({
    GuidePage: { screen: GuidePage }
}, {
    // Default config for all screens
    headerMode: 'none',
    // initialRouteName: 'GuidePage',
    navigationOptions: {
        // headerStyle: styles.header
    }
})

// Create middleware and connect
export const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const AppNavigator = reduxifyNavigator(PrimaryNav, 'root');

export default AppNavigator