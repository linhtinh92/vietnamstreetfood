import { NavigationActions } from "react-navigation";
import { RootNavigator } from "../navigators/AppNavigator";
import { AsyncStorage } from "react-native";
const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams("AuthLoading")
);

export default function navReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case "Logout":
      AsyncStorage.removeItem("userToken");
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Login" }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}
