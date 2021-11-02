// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from '@firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgNDJ_-h2GAVZb4HpwPU_uJp4Xy6AZ@w4w",
  authDomain: "vikkel-webpage.firebaseapp.com",
  projectId: "vikkel-webpage",
  storageBucket: "vikkel-webpage.appspot.com",
  messagingSenderId: "28055597444",
  appId: "1:28055597444:web:8dd573546d1066afb66dd1",
  measurementId: "G-SQCTJ1RT4P"
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