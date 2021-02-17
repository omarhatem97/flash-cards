import React, { Component } from "react";
import Deck from "./Deck";
import * as color from "../utils/colors";
import { connect } from "react-redux";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { handleAddDeck } from "../actions/index";
import { handleAddCard } from "../actions/index";
import QuizCard from "./QuizCard";

function ShowAnswer(props) {
  return (
    <View>
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

class Quiz extends Component {
  state = {
    showAnswer: false,
    idx: 0,
    numCorrect: 0,
    numIncorrect: 0,
  };

  setTitle = (title) => {
    if (!title) return;
    this.props.navigation.setOptions({
      title: `${title} Quiz`,
    });
  };

  handleShowAnswer = () => {
    console.log(this.state);
    this.setState({ showAnswer: !this.state.showAnswer });
    console.log(this.state);
  };

  resetState = () => {
    this.setState({
      idx: 0,
      numCorrect: 0,
      numIncorrect: 0,
    });
  };

  handleCorrectBut = () => {
    console.log(this.key);
    const { deck, content } = this.props;
    const value =
      this.state.idx + 1 > content.length - 1
        ? content.length - 1
        : this.state.idx + 1;

    if (this.state.idx + 1 > content.length - 1) {
      this.resetState();
      this.props.navigation.navigate("Result", {
        numCorrect: this.state.numCorrect + 1,
        total: this.props.content.length,
        title: this.props.route.params.title,
      });
    } else {
      this.setState({ idx: value });
      this.setState({ numCorrect: this.state.numCorrect + 1 });
      this.setState({ showAnswer: false });
    }
  };

  //   shouldComponentUpdate(){
  //       this.state.idx > this.props.content.length -1
  //   }

  handleInCorrectBut = () => {
    const { deck, content } = this.props;
    const value =
      this.state.idx + 1 > content.length - 1
        ? content.length - 1
        : this.state.idx + 1;

    if (this.state.idx + 1 > content.length - 1) {
      this.resetState();
      this.props.navigation.navigate("Result", {
        numCorrect: this.state.numCorrect,
        total: this.props.content.length,
        title: this.props.route.params.title,
      });
    } else {
      this.setState({ idx: value });
      this.setState({ numIncorrect: this.state.numIncorrect + 1 });
      this.setState({ showAnswer: false });
    }
  };

  render() {
    const title = this.props.route.params.title;
    this.setTitle(title);

    const { deck, content } = this.props;
    const { showAnswer, idx } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.qn}>{`${this.state.idx + 1}/ ${
          content.length
        }  `}</Text>
        {this.state.showAnswer === true ? (
          <ShowAnswer
            answer={content[idx].answer}
            handleShowAnswer={this.handleShowAnswer}
          />
        ) : (
          <View>
            <QuizCard key={"deckTitle"} question={content[idx].question} />
            <TouchableOpacity onPress={this.handleShowAnswer}>
              <Text style={styles.showAnswer}>Show Answer</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.correctButton}
            key="correct"
            onPress={this.handleCorrectBut}
          >
            <Text style={{ color: color.white }}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrongButton}
            onPress={this.handleInCorrectBut}
          >
            <Text style={{ color: color.white }}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(decks, { route }) {
  const title = route.params.title;
  const deck = decks[title];
  console.log(deck);
  const content = deck.questions; //array

  return {
    deck,
    content,
  };
}

export default connect(mapStateToProps)(Quiz);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.grey,
  },
  qn: {
    textAlign: "center",
    margin: 16,
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
  showAnswer: {
    color: color.red,
    justifyContent: "center",
    textAlign: "center",
  },

  butmargin: {
    marginTop: 64,
    marginBottom: 16,
  },
  showQuestion: {
    color: color.red,
    alignItems: "center",
  },
  answer: {
    fontSize: 22,
    margin: 16,
    textAlign: "center",
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
  correctButton: {
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
    backgroundColor: color.green,
    marginTop: 40,
  },
  wrongButton: {
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
