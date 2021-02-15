import * as React from "react";
import { View, Text } from "react-native";
import * as helpers from "./utils/helpers";

export default function App() {
  const temp = "Omar";
  const test = helpers.saveDeckTitle(temp);
  const card = {
    question: "3p?",
    answer: "A h 3o",
  };

  helpers.addCardToDeck(temp, card);

  console.log(helpers.getDecks());
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello React Native !</Text>
    </View>
  );
}
