import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBChWW9a9yxN2F9bFemUZ0b5Z2qWL4wl24",
    authDomain: "todo-app-22d10.firebaseapp.com",
    databaseURL: "https://todo-app-22d10.firebaseio.com",
    projectId: "todo-app-22d10",
    storageBucket: "todo-app-22d10.appspot.com",
    messagingSenderId: "160866552092",
    appId: "1:160866552092:web:54ed2e9b62896ca185d2d9",
    measurementId: "G-9JZ1LFM39S"
})

const db = firebaseApp.firestore();

export default db;