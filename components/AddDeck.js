import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";
import { handleAddDeck } from "../actions/index";
import * as color from "../utils/colors";

class AddDeck extends Component {
  state = {
    title: "",
  };
  handleInput = (text) => {
    this.setState({ title: text });
  };

  handleSubmit = () => {
    //dispatch save deck title
    if (this.state.title !== "") {
      this.props
        .dispatch(handleAddDeck(this.state.title))
        .then(() => alert(`${this.state.title} has been added to the Decks !`))
        .then(() => this.setState({ title: "" }));
    } else {
      alert("Enter a Deck Title !");
    }
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
            autoCapitalize="none"
            onChangeText={this.handleInput}
            value={this.state.title}
          />

          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={styles.submitButtonText}> Create Deck </Text>
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
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
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
    backgroundColor: color.red,
    marginTop: 40,
  },
});
