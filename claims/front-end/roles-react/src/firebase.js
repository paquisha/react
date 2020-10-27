import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

const firebaseConfig = {
    apiKey: "AIzaSyAyoaU6PAGe72Dqbg-UazVyVbZI7zDrzRU",
    authDomain: "roles-udemy-ba11b.firebaseapp.com",
    databaseURL: "https://roles-udemy-ba11b.firebaseio.com",
    projectId: "roles-udemy-ba11b",
    storageBucket: "roles-udemy-ba11b.appspot.com",
    messagingSenderId: "430854293292",
    appId: "1:430854293292:web:a38ca0163869bc09a40e89"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()
const functions = firebase.functions()

export {db, auth, firebase, functions}