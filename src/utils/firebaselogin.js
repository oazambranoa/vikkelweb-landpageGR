// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from '@firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBiILoLk9UBt5oEAmBzRZ49XUflnz6d7lQ",
  authDomain: "vikkel-webpage-d6d18.firebaseapp.com",
  projectId: "vikkel-webpage-d6d18",
  storageBucket: "vikkel-webpage-d6d18.appspot.com",
  messagingSenderId: "26201565460",
  appId: "1:26201565460:web:67497b464712eb9af7ba01",
  measurementId: "G-WE7QFRMMEG"
};

let firebaseInstance
export const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  else {
    firebase.app();
  }

  firebaseInstance = firebase

  return firebase
}
