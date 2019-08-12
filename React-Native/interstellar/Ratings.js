import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

class Ratings extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={styles.scoreCard}>
            <Image
              source={require("./assets/images/star-yellow.png")}
              style={styles.stars}
            />
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Text style={styles.principalText}> 8.6</Text>
              <Text style={styles.fractionText}> /10</Text>
            </View>
            <Text style={styles.secondaryText}> 1.1M</Text>
          </View>
          <View style={styles.scoreCard}>
            <Image
              source={require("./assets/images/star.png")}
              style={styles.stars}
            />
            <Text style={styles.principalText}> RATE THIS</Text>
          </View>
          <View style={styles.scoreCard}>
            <View style={styles.metaScore}>
              <Text style={styles.metaScoreText}> 76</Text>
            </View>
            <Text style={styles.principalText}> Metascore</Text>
            <Text style={styles.secondaryText}> 46 critic reviews</Text>
          </View>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 25
  },
  stars: {
    width: 20,
    height: 20,
    marginBottom: 5
  },
  principalText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600"
  },
  fractionText: {
    color: "white",
    fontSize: 11
  },
  secondaryText: {
    color: "#545454",
    fontSize: 11
  },
  metaScore: {
    backgroundColor: "#62C74F",
    width: 20,
    height: 20,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center"
  },

  metaScoreText: {
    color: "white"
  },
  scoreCard: {
    alignItems: "center",
    flex: 1
  }
});

export default Ratings;
