import React from "react";
import { Provider } from "react-redux";
import { AppNavigator } from "./src/navigators/AppNavigator";
import store from "./src/redux/store";
class MyApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
export default MyApp;
