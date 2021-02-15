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
      .then(() => helpers.saveDeckTitle("omar"))
      .then(() => helpers.addCardToDeck("omar", card))
      .then(() => helpers.getDecks())
      .then((decks) => {
        const data = JSON.parse(decks);
        console.log("the data is :");
        console.log(data);
      });
  }

  fun = () => {
    //show decks initially

    helpers
      .saveDeckTitle("omar")
      .then(() => helpers.addCardToDeck("omar", card))
      .then(() => helpers.getDecks())
      .then((decks) => {
        const data = JSON.parse(decks);
        console.log("the data is :");
        console.log(data);
      });
  };

  render() {
    this.fun();

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
