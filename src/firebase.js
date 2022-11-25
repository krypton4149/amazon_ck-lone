// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCirhUybG6ydxgRovyKYrODHxBQkKzIVZQ",
    authDomain: "clone-abf40.firebaseapp.com",
    projectId: "clone-abf40",
    storageBucket: "clone-abf40.appspot.com",
    messagingSenderId: "668433551110",
    appId: "1:668433551110:web:d61068fea1b8bf69b15887",
    measurementId: "G-MF2D27PFEB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};
