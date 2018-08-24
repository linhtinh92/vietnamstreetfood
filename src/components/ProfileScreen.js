import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  button: {
    backgroundColor: "#9f1f63",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15
  }
});

class ProfileScreen extends React.Component {
  constructor(){
    super();
    console.log("profile")
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.dispatch({ type: "Logout" })}
        >
          <Text style={{ color: "#FFF" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(ProfileScreen);
