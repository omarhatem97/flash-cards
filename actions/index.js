import { addCardToDeck, getDecks, saveDeckTitle } from "../utils/helpers";

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function handleReceiveDecks() {
  return (dispatch) => {
    return getDecks().then((decks) => dispatch(receiveDecks(decks)));
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  };
}

export function handleAddDeck(title) {
  return (dispatch) => {
    return saveDeckTitle(title).then(() => dispatch(addDeck(title)));
  };
}

export function addCard(title, card) {
  return {
    type: ADD_CARD,
    title,
    card,
  };
}

export function handleAddCard(title, card) {
  return (dispatch) => {
    return addCardToDeck(title, card).then(() =>
      dispatch(addCard(title, card))
    );
  };
}
