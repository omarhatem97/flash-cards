import * as React from "react";
import Deck from "./Deck";
import * as color from "../utils/colors";
import { connect } from "react-redux";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
} from "react-native";
import { handleReceiveDecks } from "../actions/index";

class DecksList extends React.Component {
  state = {
    titles: [],
  };

  componentDidMount() {
    this.props
      .dispatch(handleReceiveDecks())
      .then(() => this.setState({ titles: this.props.titles }));
  }
  render() {
    const { titles, numCards, decks } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Welcome To Mobile Flash Cards!</Text>
        {this.state.titles.length === 0 ? (
          <View style={styles.centered}>
            <Text style={styles.noCards}>
              There Are No Decks, start adding some !
            </Text>
          </View>
        ) : (
          <View>
            {this.state.titles.map((title) => (
              <Deck
                key={title}
                deckTitle={title}
                numCards={decks[title].questions.length}
              />
            ))}
          </View>
        )}
      </ScrollView>
    );
  }
}

function mapStateToProps(decks) {
  const titles = Object.keys(decks);
  return {
    decks,
    titles,
  };
}

export default connect(mapStateToProps)(DecksList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.grey,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  header: {
    fontSize: 24,
    margin: 16,
    textAlign: "center",
  },
  centered: {
    paddingTop: 64,
    alignItems: "center",
    justifyContent: "center",
    color: color.green,
  },
  noCards: {
    color: color.red,
    fontSize: 18,
  },
});
