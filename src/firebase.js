import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTFogmtSGhuxA97BXu-mXw3flMreIKoak",
  authDomain: "airbnb-clone-2cd3e.firebaseapp.com",
  databaseURL: "https://airbnb-clone-2cd3e.firebaseio.com",
  projectId: "airbnb-clone-2cd3e",
  storageBucket: "airbnb-clone-2cd3e.appspot.com",
  messagingSenderId: "635329284574",
  appId: "1:635329284574:web:31e5e4d1e8aedeae6ab54f",
  measurementId: "G-LLCHJ0LL14",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
