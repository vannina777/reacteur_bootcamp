import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Axios from "axios";
import Dimensions from "Dimensions";

import GroupProfile from "./GroupProfile";
import Header from "./Header";
import Events from "./Events";

class App extends React.Component {
  state = {
    data: {},
    isLoading: true,
    index: 0,
    routes: [
      { key: "first", title: "Groupe" },
      { key: "second", title: "Evénements" }
    ]
  };

  GroupRoute = () => {
    return <GroupProfile data={this.state.data} />;
  };

  EventsRoute = () => {
    return <Events data={this.state.data} />;
  };

  _renderTabBar = () => {
    return (
      <TabBar
        indicatorStyle={{ backgroundColor: "white" }}
        style={{ backgroundColor: "pink" }}
      />
    );
  };
  render = () => {
    return this.state.isLoading ? (
      <ActivityIndicator size="large" color="#5C47D3" />
    ) : (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flex: 1 }}>
          <Header data={this.state.data} />
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: this.GroupRoute,
              second: this.EventsRoute
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get("window").width }}
            tabBarPosition="bottom"
            renderTabBar={props => {
              return (
                <TabBar
                  {...props}
                  indicatorStyle={{ backgroundColor: "#F9C032" }}
                  style={{ backgroundColor: "#5C47D3" }}
                />
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  };

  componentDidMount = async () => {
    const response = await Axios.get(
      "https://lereacteur-exo-api.herokuapp.com/meetup/group"
    );

    this.setState({ data: response.data, isLoading: false });
    console.log(response.data);
  };
}

const styles = StyleSheet.create({});

export default App;
