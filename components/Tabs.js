import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DecksList from "./DecksList";
import AddDeck from "./AddDeck"
import { color } from "react-native-reanimated";

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator style={{backgroundColor:color.red}}>
      <Tab.Screen name="Decks" component={DecksList} />
      <Tab.Screen name="Add Deck" component={AddDeck} />
    </Tab.Navigator>
  );
}
