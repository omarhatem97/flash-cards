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
            <View>
                <Text>Quiz Complelte</Text>
                <Text>{`${numCorrect}/${total}`} correct</Text>
                <TouchableOpacity onPress= {this.handleRestartQuiz}>
                    <Text>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress= {this.handleBackToDeck}>
                    <Text>Back to Deck</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress= {this.handleHome}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
         );
    }
}
 
export default Result;