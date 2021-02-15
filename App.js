import React, { Component } from "react";
import { View, Text } from "react-native";
import * as helpers from "./utils/helpers";

class App extends Component {
  state = {
    omar: "zy mana 😂😂",
  };

  componentDidMount() {
    helpers.setStorage();
  }

 

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>ooo</Text>
      </View>
    );
  }
}

export default App;
