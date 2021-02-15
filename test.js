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

  // toggleme = () => {

  //   helpers.saveDeckTitle("omar")
  //   const card = {
  //     question: "hobba?",
  //     answer: "test",
  //   };

  //   helpers.addCardToDeck("omar", card).then(() => {
  //     helpers.getDecks().then((decks) => {
  //       const data = JSON.parse(decks);
  //       console.log(data);
  //     });
  //   });

  // }

  render() {
    helpers.saveDeckTitle("omar");
    const card = {
      question: "hobba?",
      answer: "test",
    };

    helpers.addCardToDeck("omar", card).then(() => {
      helpers.getDecks().then((decks) => {
        const data = JSON.parse(decks);
        console.log(data);
      });
    });

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
