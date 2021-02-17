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
    if(this.state.question === "" || this.state.answer === ""){
        alert("please fill up correctly !")
        return;
    }
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
            autoCapitalize="none"
            onChangeText={this.handlequestion}
            value={this.state.question}
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=" Add Answer"
            autoCapitalize="none"
            onChangeText={this.handleAnswer}
            value={this.state.answer}
          />

          <TouchableOpacity
            style={styles.button}
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
    borderWidth: 1,
    paddingLeft:16,
    paddingRight:16
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
    margin:32,
    flexDirection:"column" ,
    justifyContent: "flex-end",
    alignContent:"flex-end",
    padding:32,
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
