 import app from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB2P7q-W9mvQHOv-TfFMNNRIlApkgdPOvE",
    authDomain: "crud-react-d3a04.firebaseapp.com",
    databaseURL: "https://crud-react-d3a04.firebaseio.com",
    projectId: "crud-react-d3a04",
    storageBucket: "crud-react-d3a04.appspot.com",
    messagingSenderId: "915125374877",
    appId: "1:915125374877:web:377b7422e95a8bed436974"
};
  // Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()

export {db,auth}