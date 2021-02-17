import React, { Component } from "react";
import * as color from "../utils/colors";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

class Deck extends Component {
  handlePress = () => {
    const { navigation } = this.props;
    navigation.navigate("Deck", {
      title: this.props.deckTitle,
      numCards: this.props.numCards,
    });
  };

  render() {
    const { deckTitle, numCards } = this.props;

    return (
      <View key={deckTitle} style={styles.card}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.cardTitle}>{deckTitle}</Text>
          <Text style={styles.numCards}>{`${numCards} cards`}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Deck;

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
    borderRadius:8,
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
