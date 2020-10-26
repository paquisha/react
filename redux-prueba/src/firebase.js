import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB2P7q-W9mvQHOv-TfFMNNRIlApkgdPOvE",
    authDomain: "crud-react-d3a04.firebaseapp.com",
    databaseURL: "https://crud-react-d3a04.firebaseio.com",
    projectId: "crud-react-d3a04",
    storageBucket: "crud-react-d3a04.appspot.com",
    messagingSenderId: "915125374877",
    appId: "1:915125374877:web:377b7422e95a8bed436974"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()

  export {auth, firebase, db, storage}