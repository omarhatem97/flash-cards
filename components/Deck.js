import React, { Component } from "react";
import * as color from "../utils/colors";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

class Deck extends Component {
  state = {};
  render() {
    const { deckTitle, numCards } = this.props;
  
    return (
      <View key={deckTitle} style={styles.card}>
        <TouchableOpacity>
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
    marginRight:32,
    marginTop:32,

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
