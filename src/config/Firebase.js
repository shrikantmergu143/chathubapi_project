import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
require('firebase/compat/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyA455IScPVXoVAjMP8Kjpogbc2rVM_u0WA",
  authDomain: "instashre-2c6a1.firebaseapp.com",
  databaseURL: "https://instashre-2c6a1-default-rtdb.firebaseio.com",
  projectId: "instashre-2c6a1",
  storageBucket: "instashre-2c6a1.appspot.com",
  messagingSenderId: "758145740018",
  appId: "1:758145740018:web:aee92e0bc9870e5161346b",
  measurementId: "G-P01S3D0MBH"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const auth = firebase.auth();
export default db;