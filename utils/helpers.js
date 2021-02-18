import { AsyncStorage } from "react-native";
import * as Notifications from "expo-notifications";
import { Permissions } from "expo-permissions";


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
export const NOTIFICATION_KEY = "notification";

export function setStorage() {
  return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(Decks));
}

export function resetStorage() {
  AsyncStorage.setItem(DECKS_KEY, JSON.stringify({}));
  return AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify({}));
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

    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}

// export function setLocalNotification() {
//   AsyncStorage.getItem(NOTIFICATION_KEY)
//     .then(JSON.parse)
//     .then((data) => {
//       if (data === null) {
//         Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
//           if (status === "granted") {
//             Notifications.cancelAllScheduledNotificationsAsync();

//             let tomorrow = new Date();
//             tomorrow.setDate(tomorrow.getDate());
//             tomorrow.setHours(9);
//             tomorrow.setMinutes(0);

//             Notifications.scheduleLocalNotificationAsync(createNotification(), {
//               time: tomorrow,
//               repeat: "day",
//             });

//             AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
//           }
//         });
//       }
//     });
// }

//bn3mel feha ashba7

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      // if (true) {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          // console.log('got in');
          // console.log('data', data);
          if (status === 'granted') {
            // Notifications.presentLocalNotificationAsync(createNotification());
            Notifications.createChannelAndroidAsync(CHANNEL_ID, createChannel())
              .then(val => console.log('channel return:', val))
              .then(() => {
                Notifications.cancelAllScheduledNotificationsAsync();

                const tomorrow = new Date();
                // 2 minute from now
                // tomorrow.setTime(tomorrow.getTime() + 2 * 60000);

                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setHours(20);
                tomorrow.setMinutes(0);

                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day'
                  }
                );

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
              })
              .catch(err => {
                console.log('err', err);
              });
          }
        });
      }
    });
}



// export function setNotifcation() {
//   PushNotification.configure({
//     onNotification: function (notification) {
//       console.log("NOTIFICATION:", notification);

//       // notification.finish(PushNotificationIOS.FetchResult.NoData);
//     },

//     onAction: function (notification) {
//       console.log("ACTION:", notification.action);
//       console.log("NOTIFICATION:", notification);
//     },

//     onRegistrationError: function (err) {
//       console.error(err.message, err);
//     },

//     popInitialNotification: true,

//     requestPermissions: true,
//   });
// }


// export function tesPush (){
//   PushNotification.localNotification({
  
//     title: "My Notification Title", // (optional)
//     message: "My Notification Message", // (required)
   
//   });
// }

