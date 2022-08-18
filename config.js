import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyCX1WSGCMCxBbma8TvYe_alEOIiByNr8uA",
    authDomain: "c-71-f2ac8.firebaseapp.com",
    projectId: "c-71-f2ac8",
    storageBucket: "c-71-f2ac8.appspot.com",
    messagingSenderId: "142255152968",
    appId: "1:142255152968:web:7aafc58d90f6953b805d7d"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
