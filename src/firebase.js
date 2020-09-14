import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkTdbki6SprST1oInSe3XpiHbu_q6ypSg",
  authDomain: "clone-1cfc9.firebaseapp.com",
  databaseURL: "https://clone-1cfc9.firebaseio.com",
  projectId: "clone-1cfc9",
  storageBucket: "clone-1cfc9.appspot.com",
  messagingSenderId: "266771599576",
  appId: "1:266771599576:web:a1b9f12fd50e907f9087ad",
  measurementId: "G-8GFVKPMSQW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
