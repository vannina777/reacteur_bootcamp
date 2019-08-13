import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Header extends React.Component {
  render = () => {
    const { data } = this.props;
    console.log(data);
    return (
      <View style={styles.header}>
        <Image
          source={{
            uri:
              "https://secure.meetupstatic.com/photos/event/8/a/8/f/highres_480335471.jpeg"
          }}
          style={{ height: 100, width: 75 }}
          resizeMode="cover"
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    alignItems: "center",
    backgroundColor: "#5C47D3"
  }
});

export default Header;
