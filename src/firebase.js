import firebase from 'firebase';
import { initializeApp } from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtB_gibqMqDM_p24fkkXaXst_03AzR5qk",
    authDomain: "clo-9c4a3.firebaseapp.com",
    projectId: "clo-9c4a3",
    storageBucket: "clo-9c4a3.appspot.com",
    messagingSenderId: "1014041218355",
    appId: "1:1014041218355:web:2e8a0c22a315f1d4600246"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
