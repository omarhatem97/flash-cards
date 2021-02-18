import React, { Component } from "react";
import * as color from "../utils/colors";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { connect } from "react-redux";

class DeckDetails extends Component {
  setTitle = (title) => {
    if (!title) return;
    this.props.navigation.setOptions({
      title: title,
    });
  };
  hadleAnswerButton = () => {
    //check if there is any card
    const title = this.props.route.params.title;
    console.log(this.props.route.params.title);
    if (this.props.decks[title].questions.length > 0) {
      this.props.navigation.navigate("Quiz", {
        title: title,
      });
    } else {
      alert("Please Add Cards First!");
    }
  };

  hadleAddCard = () => {
    this.props.navigation.navigate("Add Card", {
      title: this.props.route.params.title,
    });
  };

  render() {
    const { title } = this.props.route.params;
    this.setTitle(title);
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>📜 {title}</Text>
        <Text style={styles.numCards}>{this.props.numCards} cards</Text>
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
      </SafeAreaView>
    );
  }
}

function mapStateToProps(decks, { route }) {
  const title = route.params.title;
  const numCards = decks[title].questions.length;
  return {
    decks,
    numCards,
  };
}

export default connect(mapStateToProps)(DeckDetails);

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
