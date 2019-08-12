import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Ratings from "./Ratings";

class Description extends React.Component {
  render = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          backgroundColor: "#212121"
        }}
      >
        <Text style={styles.title}>Interstelar</Text>

        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text style={styles.text}> 2014</Text>
          <Text style={styles.text}> PG-13</Text>
          <Text style={styles.text}> 2h49 min</Text>
          <Text style={styles.text}> Adventure, Drama, Sci-Fi</Text>
        </View>

        <View
          style={{ flexDirection: "row", flex: 1, alignItems: "flex-start" }}
        >
          <Image
            source={require("./assets/images/interstellar-poster.jpg")}
            resizeMode="contain"
            style={styles.poster}
          />
          <View style={{ flex: 1, paddingLeft: 15 }}>
            <Text style={styles.descriptionText}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival.{" "}
            </Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => alert("clicked")}
            >
              <Text style={styles.buttonText}> + ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Ratings />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  poster: {
    width: 101,
    height: 150
  },
  addButton: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 7,
    backgroundColor: "#2177BD",
    width: "100%",
    borderRadius: 6
  },
  buttonText: {
    fontSize: 12,
    color: "white",
    fontWeight: "500"
  },
  descriptionText: {
    fontSize: 12,
    lineHeight: 15,
    color: "white",
    marginBottom: 15,
    paddingRight: 10
  },
  text: {
    color: "white"
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "300"
  }
});

export default Description;
