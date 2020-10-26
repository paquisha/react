import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtw0cZLVZI-spKUVnNXtYstvipMUQQVx0",
    authDomain: "chat-3-6079a.firebaseapp.com",
    databaseURL: "https://chat-3-6079a.firebaseio.com",
    projectId: "chat-3-6079a",
    storageBucket: "chat-3-6079a.appspot.com",
    messagingSenderId: "758580118933",
    appId: "1:758580118933:web:ca2634c11bfa0c0196229c"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}