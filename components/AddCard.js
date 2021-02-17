import React, { Component } from "react";
import Deck from "./Deck";
import * as color from "../utils/colors";
import { connect } from "react-redux";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { handleAddDeck } from "../actions/index";
import {handleAddCard} from "../actions/index";

class AddCard extends Component {
  state = {
    question: "",
    answer: "",
  };

  handlequestion = (text) => {
    this.setState({ question: text });
  };
  handleAnswer = (text) => {
    this.setState({ answer: text });
  };

  handleSubmit = () => {
    //dispatch save deck title
    const card = {
      question: this.state.question,
      answer: this.state.answer,
    };
    const title = this.props.route.params.title;
    console.log(card);
    console.log(title);
    this.props
      .dispatch(handleAddCard(title, card))
      .then(() => {
          alert('Card has been added succefully!');
          this.setState({question:""});
          this.setState({answer:""});
        })
  };

  render() {
    return (
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <Text style={styles.header}>Enter your Card Details</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=" Add a Question"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handlequestion}
            value={this.state.question}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=" Add Answer"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleAnswer}
            value={this.state.answer}
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

export default connect()(AddCard);

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
