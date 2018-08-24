import React from "react";
import { Text, StyleSheet, FlatList, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import BaseScreen from "./BaseScreen";
import { HttpService } from "./../Services/http-service";
import { Settings } from "./../setting";
import { List, ListItem, SearchBar } from "react-native-elements";
import { withNavigationFocus } from "react-navigation";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
class BookingScreen extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      typeBooking: "all",
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }
  
  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };
  
  componentDidMount() {
    const didBlurSubscription = this.props.navigation.addListener(
      'didBlur',
      payload => {
        alert(1);
      }
    );
    
  }

  handleTabFocus = () => {
    this.getDataBooking();
  };
  async getDataBooking() {
    const data = await HttpService.get(
      Settings.API + Settings.API_GET_BOOKING,
      { headers: { Authorization: "Bearer " + this.props.USER_TOKEN } }
    );
    if (data.error == true) {
      alert(data.message);
      return this.props.navigation.dispatch({
        type: "Logout"
      });
    } else {
      console.log(data);
    }
  }
  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              avatar={{ uri: item.picture.thumbnail }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={10}
        />
      </List>
    );
  }
}
const mapStateToProps = state => ({
  USER_TOKEN: state.auth.USER_TOKEN
});
export default connect(mapStateToProps)(withNavigationFocus(BookingScreen));
