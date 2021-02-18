import * as React from "react";
import { Text, View, SafeAreaView, ColorPropType } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DecksList from "./DecksList";
import AddDeck from "./AddDeck";
// import { color } from "react-native-reanimated";
import * as color from "../utils/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TabBarItem } from "react-native-tab-view";
import { Ionicons } from '@expo/vector-icons';

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
