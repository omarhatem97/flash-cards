import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as color from "../utils/colors";

export default function ShowAnswer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.answer}>{props.answer}</Text>
      <TouchableOpacity
        style={styles.showQuestion}
        onPress={() => props.handleShowAnswer()}
      >
        <Text style={styles.showQuestion}>Question</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 32,
  },

  showQuestion: {
    color: color.red,
    alignItems: "center",
  },
  answer: {
    fontSize: 22,
    margin: 16,
  },
});
