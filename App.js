import React, { Component } from "react";
import { View, Text } from "react-native";
import * as helpers from "./utils/helpers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import thunk from "redux-thunk";
import Tabs from "./components/Tabs";
import Constants from "expo-constants";
import { connect } from "react-redux";
import * as color from "./utils/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DeckDetails from './components/DeckDetails'
import AddCard from './components/AddCard'

const store = createStore(reducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

const StatusBar = () => {
  return (
    <View
      style={{
        height: Constants.statusBarHeight,
        backgroundColor: color.blue,
      }}
    />
  );
};

class App extends Component {
  componentDidMount() {
    const card = {
      question: "hobba?",
      answer: "test",
    };

    helpers.setStorage().then(() => helpers.getDecks());
    // .then((decks) => console.log(decks));
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen name="Deck" component={DeckDetails} />
            <Stack.Screen name="Add Card" component={AddCard} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
