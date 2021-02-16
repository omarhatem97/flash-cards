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

const store = createStore(reducer, applyMiddleware(thunk));

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
        <View style={{ height: Constants.statusBarHeight }} />
        <Tabs />
      </Provider>
    );
  }
}

export default App;
