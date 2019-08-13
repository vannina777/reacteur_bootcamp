import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import HTML from "react-native-render-html";
import Icon from "react-native-vector-icons/Ionicons";
import IconFont from "react-native-vector-icons/FontAwesome";

class GroupProfile extends React.Component {
  render = () => {
    const { data } = this.props;

    const HTMLcontent = data.description;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{data.name}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="md-globe" size={25} color="#5C47D3" />
          <Text style={styles.location}>
            {data.city}, {data.country}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="md-home" size={25} color="#5C47D3" />
          <Text style={styles.location}>www.lereacteur.io</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconFont name="hashtag" size={20} color="#5C47D3" />
          <Text style={styles.location}>{data.category.name}</Text>
        </View>
        <Text style={styles.subtitle}>Description</Text>
        <HTML html={HTMLcontent} style={styles.html} />
        <Text style={styles.subtitle}>Organizer</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}
        >
          <Image
            source={{
              uri: data.organizer.photo.highres_link
            }}
            style={styles.portrait}
            resizeMode="cover"
          />
          <Text style={styles.portraitText}> {data.organizer.name}</Text>
        </View>
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 20
  },
  location: {
    fontSize: 18,
    color: "grey",
    marginLeft: 8
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 15
  },
  portrait: {
    height: 50,
    width: 50,
    borderRadius: 50
  },

  portraitText: {
    fontSize: 18,
    fontWeight: "800"
  },
  html: {
    marginBottom: -50
  }
});

export default GroupProfile;
