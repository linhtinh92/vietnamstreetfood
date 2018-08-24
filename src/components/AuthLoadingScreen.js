import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    if (userToken) {
      this.props.navigation.dispatch({
        type: "LoginSuccess",
        params: {
          token: userToken
        }
      });
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "MainTab" })]
      });
      this.props.navigation.dispatch(resetAction);
    } else {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Login" })]
      });
      this.props.navigation.dispatch(resetAction);
    }
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default AuthLoadingScreen;
