// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUEvU9W1DEiPpCQHuS1fs8eBnROu6U-T0",
  authDomain: "react-authentication-3e987.firebaseapp.com",
  projectId: "react-authentication-3e987",
  storageBucket: "react-authentication-3e987.appspot.com",
  messagingSenderId: "322184168918",
  appId: "1:322184168918:web:02ec6035186c1885c55077",
  measurementId: "G-QSQB0214PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;