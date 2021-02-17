import React, { Component } from "react";
import Deck from "./Deck";
import * as color from "../utils/colors";
import { connect } from "react-redux";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { handleAddDeck } from "../actions/index";

class AddDeck extends Component {
  state = {
    title: "",
  };
  handleInput = (text) => {
    this.setState({ title: text });
  };

  handleSubmit = () => {
    //dispatch save deck title
    this.props
      .dispatch(handleAddDeck(this.state.title))
      .then(() => alert(`${this.state.title} has been added to the Decks !`))
      .then(() => this.setState({ title: "" }));
  };
  render() {
    return (
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <Text style={styles.header}>What is your Deck Title ?</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=" Deck Title"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleInput}
            value={this.state.title}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.handleSubmit}
          >
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AddDeck);

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  header: {
    fontSize: 24,
    margin: 16,
    textAlign: "center",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
