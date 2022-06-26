import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDunlQb20D40Dm8-Ma6f6xjivp-bPRccPk",
    authDomain: "erotic-stories-d597f.firebaseapp.com",
    projectId: "erotic-stories-d597f",
    storageBucket: "erotic-stories-d597f.appspot.com",
    messagingSenderId: "732989049750",
    appId: "1:732989049750:web:dbf4842f12eff672412bb7",
    measurementId: "G-PSEJND4TQF"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage, firebaseApp, firebase };