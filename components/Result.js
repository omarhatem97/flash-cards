import React, { Component } from "react";
import Deck from "./Deck";
import * as color from "../utils/colors";
import { connect } from "react-redux";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { handleAddDeck } from "../actions/index";
import { handleAddCard } from "../actions/index";
import QuizCard from "./QuizCard";


class Result extends Component {
    state = {  }

    handleRestartQuiz= () => {
        this.props.navigation.navigate('Quiz',{
            title:this.props.route.params.title,
        })
    }

    handleBackToDeck = () => {
        this.props.navigation.navigate('Deck',{
            title:this.props.route.params.title,
        })
    }

    handleHome=()=> {
        this.props.navigation.navigate('Home')
    }

    render() { 
        const{numCorrect, title, total} = this.props.route.params;
        return ( 
            <View style={styles.container}>
                <Text style= {styles.header}>Quiz Complelte!</Text>
                <Text style={[styles.header, {color:color.red}]}>{`${numCorrect}/${total}`} correct</Text>
                <TouchableOpacity style={styles.correctButton} onPress= {this.handleRestartQuiz}>
                    <Text style={{color:color.white}}>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.button} onPress= {this.handleBackToDeck}>
                    <Text style={{color:color.white}}>Back to Deck</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wrongButton} onPress= {this.handleHome}>
                    <Text style={{color:color.white}}>Home</Text>
                </TouchableOpacity>
            </View>
         );
    }
}
 
export default Result;


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