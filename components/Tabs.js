import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import * as color from "../utils/colors";
import AddDeck from "./AddDeck";
import DecksList from "./DecksList";

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { backgroundColor: "#2e7d32" },
        labelStyle: { color: color.white },
        showIcon: true,
      }}
    >
      <Tab.Screen
        name="Decks"
        component={DecksList}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="cards-outline"
              size={24}
              color={color.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add Deck"
        component={AddDeck}
        options={{
          tabBarIcon: () => (
            <Ionicons name="add-circle-outline" size={24} color={color.white} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
