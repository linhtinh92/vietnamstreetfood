import React from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

class DetailBookingScreen extends React.Component {
  constructor(){
    super();
    console.log("detail")
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: 'Dashboard'
    };
  };
  componentDidMount() {
    alert(1)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>DetailBookingScreen</Text>
      </View>
    );
  }
}

export default DetailBookingScreen;
