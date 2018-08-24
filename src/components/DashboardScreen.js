import React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HttpService } from "./../Services/http-service";
import { Settings } from "./../setting";
var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column"
  },
  wrapper_item: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    height: 100,
    borderWidth: 1,
    borderColor: "rgba(159,31,99, 0.3)",
    marginBottom: 10,
    width: width - 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#FFF",
    borderRadius: 5,
    position: "relative"
  },
  item_left: {
    width: 60,
    height: 60,
    position: "absolute",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    right: 10,
    top: 20
  },
  item_1: {
    backgroundColor: "#04c1c4"
  },
  item_2: {
    backgroundColor: "#00a65a"
  },
  item_3: {
    backgroundColor: "#f39c12"
  },
  item_4: {
    backgroundColor: "#dd4b39"
  },
  item_right: {
    padding: 10
  }
});

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalContact: 0,
      totalContactNew: 0,
      totalBooking: 0,
      totalBookingNew: 0
    };
  }
  componentDidMount() {
    this.getDataDashboard();
  }

  async getDataDashboard() {
    const data = await HttpService.get(
      Settings.API + Settings.API_GET_DASHBOARD,
      { headers: { Authorization: "Bearer " + this.props.USER_TOKEN } }
    );
    if (data.error == true) {
      alert(data.message);
      return this.props.navigation.dispatch({
        type: "Logout"
      });
    } else {
      this.setState({
        totalBooking: data.total_booking,
        totalBookingNew: data.total_booking_new
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ marginTop: 30 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Booking",{ type: 'new' })}
          >
            <View style={styles.wrapper_item}>
              <View style={styles.item_right}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  {this.state.totalBookingNew}
                </Text>
                <Text>New Booking</Text>
              </View>
              <View style={[styles.item_left, styles.item_1]}>
                <Ionicons name={`ios-pulse`} size={25} color={`#FFF`} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Contact", { type: 'all' })}
          >
            <View style={styles.wrapper_item}>
              <View style={styles.item_right}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  {this.state.totalBooking}
                </Text>
                <Text>Total Booking</Text>
              </View>
              <View style={[styles.item_left, styles.item_2]}>
                <Ionicons name={`ios-switch`} size={25} color={`#FFF`} />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.wrapper_item}>
            <View style={styles.item_right}>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {this.state.totalBookingNew}
              </Text>
              <Text>Contact New</Text>
            </View>
            <View style={[styles.item_left, styles.item_3]}>
              <Ionicons name={`ios-mail`} size={25} color={`#FFF`} />
            </View>
          </View>

          <View style={styles.wrapper_item}>
            <View style={styles.item_right}>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {this.state.totalContact}
              </Text>
              <Text>Total Contact</Text>
            </View>
            <View style={[styles.item_left, styles.item_4]}>
              <Ionicons name={`ios-mail-open`} size={25} color={`#FFF`} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  USER_TOKEN: state.auth.USER_TOKEN
});
export default connect(mapStateToProps)(DashboardScreen);
