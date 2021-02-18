import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import AddCard from "./components/AddCard";
import DeckDetails from "./components/DeckDetails";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Tabs from "./components/Tabs";
import reducer from "./reducers/index";
import * as helpers from "./utils/helpers";

const store = createStore(reducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

const StatusBar = () => {
  return (
    <View
      style={{
        height: Constants.statusBarHeight,
        backgroundColor: "#005005",
      }}
    />
  );
};

class App extends Component {
  componentDidMount() {
    helpers.getDecks();
    helpers.setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Tabs}
              options={{
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#2e7d32" },
              }}
            />
            <Stack.Screen name="Deck" component={DeckDetails} />
            <Stack.Screen name="Add Card" component={AddCard} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="Result" component={Result} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
