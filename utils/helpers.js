import { AsyncStorage } from "react-native";

let Decks = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

export const DECKS_KEY = "decks";

export function setStorage() {
  return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(Decks));
}

export function resetStorage() {
  AsyncStorage.setItem(DECKS_KEY, JSON.stringify({})).then(() =>
    console.log("reseted")
  );
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_KEY).then((decks) => {
    return JSON.parse(decks);
  });
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECKS_KEY).then((decks) => {
    const data = JSON.parse(decks);
    return data[id];
  });
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    DECKS_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: [],
      },
    })
  );
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECKS_KEY).then((decks) => {
    const data = JSON.parse(decks);
    const newDecks = {
      ...data,
      [title]: {
        questions: [...data[title].questions, card],
      },
    };
    console.log(newDecks);
    AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(newDecks));
  });
}
