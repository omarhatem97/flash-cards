import React, { Component } from "react";
import Deck from "./Deck";
import * as color from "../utils/colors";
import { connect } from "react-redux";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { handleAddDeck } from "../actions/index";
import { handleAddCard } from "../actions/index";
import QuizCard from "./QuizCard";

export default function ShowAnswer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.answer}>{props.answer}</Text>
      <TouchableOpacity style={styles.showQuestion} onPress={()=>props.handleShowAnswer()}>
        <Text style={styles.showQuestion}>Question</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent:"space-between",
    margin:32,
  },

  showQuestion: {
    color: color.red,
    alignItems:"center"
  },
  answer: {
      fontSize:22,
      margin:16
  }
});
