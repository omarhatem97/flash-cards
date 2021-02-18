import { AsyncStorage } from "react-native";
import { Notifications } from "expo";
import {Permissions} from 'expo-permissions'


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
export const NOTIFICATION_KEY = "notification"

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
    // console.log(newDecks);
    AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(newDecks));
  });
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: "Take a quiz!",
    body: "👋 don't forget to take a quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate());
            tomorrow.setHours(8);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day",
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
