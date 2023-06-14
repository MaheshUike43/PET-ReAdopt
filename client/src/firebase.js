// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaANiBmEBQ1FKIo6Jq4qod-YtYIsl6ncs",
  authDomain: "petadoptionandrescue-a3c5e.firebaseapp.com",
  projectId: "petadoptionandrescue-a3c5e",
  storageBucket: "petadoptionandrescue-a3c5e.appspot.com",
  messagingSenderId: "226969305393",
  appId: "1:226969305393:web:2d0235d06e1b2688beb010"
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export const storage = firebase.storage();
export default firebase
