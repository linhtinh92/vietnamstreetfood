import React from "react";
import { HttpService } from "./../Services/http-service";
import { Settings } from "./../setting";
import { AsyncStorage } from "react-native";
import styleToast from "./../assets/style/toast";
import Toast from "react-native-toast-native";
import {
  withNavigation,
  StackActions,
  NavigationActions
} from "react-navigation";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  button: {
    backgroundColor: "#9f1f63",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  textInput: {
    height: 40,
    width: 300,
    flexDirection: "row",
    marginTop: 1,
    marginBottom: 10,
    borderColor: "#9f1f63",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#FFF",
    paddingLeft: 10
  }
});

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      isValidEmail: true,
      password: "",
      isValidPassword: true,
      isSecured: true
    };
  }

  regexEmail(text) {
    var flat = true;
    flat = text ? true : false;
    this.setState({ isValidEmail: flat });
    this.setState({ Email: text });
    return flat;
  }

  regexPassword(text) {
    var flat = true;
    flat ? true : false;
    this.setState({ isValidPassword: flat });
    this.setState({ password: text });
    return flat;
  }
  async abcLogin() {
    const data = await HttpService.post(Settings.API + Settings.API_LOGIN, {
      email: this.state.Email,
      password: this.state.password
    });
    if (data.error == true) {
      Toast.show(data.message, Toast.SHORT, Toast.BOTTOM, styleToast);
    } else {
      this.props.navigation.dispatch({
        type: "LoginSuccess",
        params: {
          token: data.data.user_token
        }
      });
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "MainTab" })]
      });
      AsyncStorage.setItem("userToken", data.data.user_token);
      return this.props.navigation.dispatch(resetAction);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 100, marginBottom: 15 }}
          source={require("../assets/Images/logo.png")}
        />
        <TextInput
          style={styles.textInput}
          value={this.state.Email}
          onChangeText={text => this.regexEmail(text)}
          placeholder="Email"
        />
        <TextInput
          style={styles.textInput}
          value={this.state.password}
          onChangeText={text => this.regexPassword(text)}
          textContentType="password"
          secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.abcLogin()}
        >
          <Text style={{ color: "#FFF" }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  title: "Login",
  headerLeft: null
};
export default withNavigation(LoginScreen);
