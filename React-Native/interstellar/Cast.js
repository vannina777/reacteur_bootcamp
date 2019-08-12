import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ActorCard from "./ActorCard";

class Cast extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-between"
          }}
        >
          <Text style={styles.title}>Top Billed Cast</Text>
          <Text style={styles.link}> SEE ALL</Text>
        </View>
        <ScrollView horizontal={true} style={{ marginBottom: 15 }}>
          <ActorCard
            actor="Matthew McConaughey"
            character="Cooper"
            url={require("./assets/images/cooper-actor.jpg")}
          />
          <ActorCard
            actor="Ann Hathaway"
            character="Brand"
            url={require("./assets/images/hathaway-actress.jpg")}
          />
          <ActorCard
            actor="Jessica Chastain"
            character="Murph"
            url={require("./assets/images/chastain-actress.jpg")}
          />
          <ActorCard />
        </ScrollView>

        <View style={styles.otherCastSection}>
          <Text style={styles.otherTitle}>Director </Text>
          <Text style={styles.otherText}>Christopher Nolan </Text>
        </View>

        <View style={styles.otherCastSection}>
          <Text style={styles.otherTitle}>Writers </Text>
          <Text style={styles.otherText}>
            Jonathan Nohan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 50
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "300",
    marginVertical: 15,
    fontWeight: "600"
  },
  link: {
    color: "#2177BD",
    fontWeight: "600"
  },
  otherCastSection: {
    marginBottom: 15
  },
  otherTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "600"
  },
  otherText: {
    color: "white",
    fontSize: 11
  }
});

export default Cast;
