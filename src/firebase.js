import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD1NQcmZTp8AAs5WdxvP2BKAyKr16kTnmw",
    authDomain: "line-bff91.firebaseapp.com",
    projectId: "line-bff91",
    storageBucket: "line-bff91.appspot.com",
    messagingSenderId: "150315840136",
    appId: "1:150315840136:web:43dca4828ff70c9f93e53d"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth}