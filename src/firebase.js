import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAB76W2lDnLL9RnVB_0egPLBnS229RxOgU",
  authDomain: "chat-firebase-react-67a02.firebaseapp.com",
  projectId: "chat-firebase-react-67a02",
  storageBucket: "chat-firebase-react-67a02.appspot.com",
  messagingSenderId: "155762041826",
  appId: "1:155762041826:web:93dfdb8d17e91192138fbb",
  measurementId: "G-W3C0J1L8LY",
});

const database = firebaseApp.firestore();

const auth = firebase.auth();

export { auth, database };
