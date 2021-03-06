import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as color from "../utils/colors";

export default function QuizCard(props) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardTitle}>Question</Text>
        <Text style={styles.questionDetail}>{props.question}</Text>
      </View>
    </View>
  );
}

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
  },
  cardTitle: {
    padding: 16,
    textAlign: "center",
    fontSize: 16,
  },

  questionDetail: {
    padding: 16,
    textAlign: "center",
    fontSize: 22,
  },
});
