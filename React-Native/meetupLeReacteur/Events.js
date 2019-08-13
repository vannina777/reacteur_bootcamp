import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList
} from "react-native";
import Header from "./Header";
import Axios from "axios";
import Icon from "react-native-vector-icons/Feather";

class Events extends React.Component {
  state = {
    data: [],
    isLoading: true
  };

  render = () => {
    return this.state.isLoading ? (
      <ActivityIndicator size="large" color="#5C47D3" />
    ) : (
      <ScrollView>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => {
            return (
              <View style={styles.eventCard}>
                <View>
                  <Text style={styles.eventFirstLine}>{item.name} </Text>

                  <View style={{ flexDirection: "row" }}>
                    <Icon name="map-pin" size={15} color="#5C47D3" />
                    <Text style={styles.postIconText}>
                      {item.venue.address_1}{" "}
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Icon name="watch" size={15} color="#5C47D3" />
                  <Text style={styles.postIconText}>
                    {item.local_date} à {item.local_time}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Icon name="user" size={15} color="#5C47D3" />
                  <Text style={styles.postIconText}>
                    {item.yes_rsvp_count} participant(e)s{" "}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    );
  };

  componentDidMount = async () => {
    const response = await Axios.get(
      "https://lereacteur-exo-api.herokuapp.com/meetup/events"
    );
    this.setState({ data: response.data, isLoading: false });
    console.log(response.data);
  };
}

const styles = StyleSheet.create({
  eventCard: {
    borderBottomWidth: 1,
    borderBottomColor: "#d1d1d1",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  eventFirstLine: {
    fontSize: 19,
    fontWeight: "600",
    marginBottom: 10
  },
  postIconText: {
    marginLeft: 10,
    marginBottom: 5
  }
});

export default Events;
