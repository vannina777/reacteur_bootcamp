import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class ActorCard extends React.Component {
  render = () => {
    const { actor, character, url } = this.props;
    return (
      <View style={styles.card}>
        <Image
          source={url}
          resizeMode="cover"
          style={{ height: 200, width: 122 }}
        />
        <View style={{ width: 122, backgroundColor: "#2A2A2A", padding: 10 }}>
          <Text style={styles.actor} numberOfLines={1}>
            {actor}
          </Text>
          <Text style={styles.character}>{character} </Text>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  card: {
    marginRight: 10
  },
  actor: {
    color: "white",
    fontSize: 12
  },
  character: {
    color: "white",
    fontSize: 11
  }
});

export default ActorCard;
