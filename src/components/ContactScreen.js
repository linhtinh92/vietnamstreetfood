import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { withNavigationFocus, addEventListener } from "react-navigation";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
class ContactScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  _myRocketFunction = () => {
    alert('Here is rocket tab!');
  }

  componentWillReceiveProps(newProps) {
    this._myRocketFunction();
  }
  render() {
    return (
      <View>
        
      </View>
    );
  }
}

export default withNavigationFocus(ContactScreen);
