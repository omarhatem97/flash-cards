import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DecksList from './DecksList'
import AddDeck from './AddDeck'


const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Decks" component={DecksList} />
        <Tab.Screen name="Add Deck" component={AddDeck} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
