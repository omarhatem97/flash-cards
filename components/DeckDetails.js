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
  hadleAnswerButton = () => {
    this.props.navigation.navigate("Quiz", {
      title: this.props.route.params.title,
    });
  };

  hadleAddCard = () => {
    this.props.navigation.navigate("Add Card", {
      title: this.props.route.params.title,
    });
  };

  render() {
    const { title, numCards } = this.props.route.params;
    this.setTitle(title);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>📜 {title}</Text>
        <Text style={styles.numCards}>{numCards} cards</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: color.green }]}
            onPress={this.hadleAddCard}
          >
            <Text style={{ color: color.white }}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: color.red }]}
            onPress={this.hadleAnswerButton}
          >
            <Text style={{ color: color.white }}>Answer Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DeckDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    fontSize: 32,
    textAlign: "center",
    padding: 32,
  },
  numCards: {
    textAlign: "center",
    fontSize: 18,
  },
  buttonContainer: {
    margin: 32,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    padding: 32,
    borderRadius: 8,
  },
  button: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: "#032449",
    marginTop: 40,
  },
});
