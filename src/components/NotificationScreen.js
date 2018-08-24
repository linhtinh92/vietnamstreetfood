import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
class NotificationScreen extends React.Component{
  constructor(){
    super();
    console.log('noti')
  }
  render() {
    return (
      <View style={styles.container}>
    <Text>NotificationScreen</Text>
  </View>
    )
  };
}


export default NotificationScreen;
