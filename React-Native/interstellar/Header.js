import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerBar: {
    height: 50,
    backgroundColor: "#393939"
  },
  logo: {
    width: 75,
    height: 50
  }
});

class Header extends React.Component {
  render = () => {
    return (
      <View style={styles.headerBar}>
        <Image
          source={require("./assets/images/imdb-logo-blanc.png")}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
    );
  };
}

export default Header;
