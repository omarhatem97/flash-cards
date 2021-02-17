import React, { Component } from "react";
import * as color from "../utils/colors";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

class DeckDetails extends Component {
  state = {};

  setTitle = (title) => {
    if (!title) return;
    this.props.navigation.setOptions({
      title: title,
    });
  };

  hadleAnswerButton = () => {};

  hadleAddCard = () => {
    this.props.navigation.navigate("Add Card", {
      title: this.props.route.params.title,
    });
  };

  render() {
    const { title, numCards } = this.props.route.params;
    this.setTitle(title);
    return (
      <View>
        <Text>{title}</Text>
        <Text>{numCards} cards</Text>
        <TouchableOpacity onPress={this.hadleAddCard}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.hadleAnswerButton}>
          <Text>Answer Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeckDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.green,
  },

  card: {
    marginLeft: 32,
    marginRight: 32,
    marginTop: 32,
    marginBottom: 16,
    backgroundColor: color.white,
    justifyContent: "center",
    alignContent: "center",
  },
  cardTitle: {
    padding: 16,
    textAlign: "center",
    fontSize: 22,
  },

  numCards: {
    paddingBottom: 16,
    textAlign: "center",
    fontSize: 12,
  },
});
