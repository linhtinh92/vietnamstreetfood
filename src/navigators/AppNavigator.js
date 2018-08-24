import React from "react";
import { connect } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  createStackNavigator,
  createTabNavigator
} from "react-navigation";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import LoginScreen from "../components/LoginScreen";
import DashboardScreen from "../components/DashboardScreen";
import BookingScreen from "../components/BookingScreen";
import ProfileScreen from "../components/ProfileScreen";
import ContactScreen from "../components/ContactScreen";
import DetailBookingScreen from "../components/DetailBookingScreen";
import AuthLoadingScreen from "../components/AuthLoadingScreen";
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navReducer
);

export const MainTab = createTabNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name={`ios-home`} size={25} color={tintColor} />
        )
      }
    },
    Booking: {
      screen: BookingScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name={`ios-keypad`} size={25} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name={`ios-contact`} size={25} color={tintColor} />
        )
      }
    },
    Contact: {
      screen: ContactScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name={`ios-mail-unread`} size={25} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Dashboard",
    tabBarPosition: "bottom",
    lazy: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: "#ff0",
      inactiveTintColor: "#fff",
      style: {
        backgroundColor: "#9f1f63",
        color: "#FFF"
      }
    }
  }
);

MainTab.navigationOptions = ({ navigation, navigationOptions }) => {
  let { routeName } =
    navigationOptions.title || navigation.state.routes[navigation.state.index];
  let headerTitle = routeName;
  return {
    headerTitle
  };
};

const RootNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    MainTab: { screen: MainTab },
    DetailBookingScreen: { screen: DetailBookingScreen },
    AuthLoading: AuthLoadingScreen
  },
  {
    initialRouteName: "AuthLoading"
  }
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, "root");

const mapStateToProps = state => ({
  state: state.nav
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
