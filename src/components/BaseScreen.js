import NetworkState from "react-native-network-state";

import React from "react";
import { connect } from "react-redux";

class BaseScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    <NetworkState />;
  }
}

export default BaseScreen;
