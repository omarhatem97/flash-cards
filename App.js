import React, { Component } from "react";
import { View, Text } from "react-native";
import * as helpers from "./utils/helpers";

class App extends Component {
  state = {
    omar: "zy mana 😂😂",
  };

  componentDidMount() {
    const card = {
      question: "hobba?",
      answer: "test",
    };

    helpers
      .setStorage()
      .then(() => helpers.getDecks())
      .then((decks)=> console.log(decks));
      
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
