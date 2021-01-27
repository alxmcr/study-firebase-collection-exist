// NOTE: import only the Firebase modules that you need in your app... except
// for the second line, which makes both the linter and react-firebase happy
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initalize Firebase.
var firebaseConfig = {
  apiKey: "AIzaSyBmfE71fh-Vv1vJk-F2WEPguZJvsBrmb0k",
  authDomain: "react-firebase-practice-01.firebaseapp.com",
  projectId: "react-firebase-practice-01",
  storageBucket: "react-firebase-practice-01.appspot.com",
  messagingSenderId: "1064525264600",
  appId: "1:1064525264600:web:29f047f22a6de748d8c9ad"
};

let fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { fb, db };
