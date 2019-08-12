import React from "react";
import { Text, ScrollView, SafeAreaView } from "react-native";
import Header from "./Header";
import Description from "./Description";
import Separator from "./Separator";
import Cast from "./Cast";

class App extends React.Component {
  render = () => {
    return (
      <SafeAreaView>
        <Header />
        <ScrollView style={{ backgroundColor: "#212121" }}>
          <Description />
          <Separator />
          <Cast />
        </ScrollView>
      </SafeAreaView>
    );
  };
}

export default App;
