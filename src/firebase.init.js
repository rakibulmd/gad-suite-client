// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSMuYUPGnD0K6_txXI27Wmqgn0Gbj5zv8",
    authDomain: "gad-suite.firebaseapp.com",
    projectId: "gad-suite",
    storageBucket: "gad-suite.appspot.com",
    messagingSenderId: "263835077756",
    appId: "1:263835077756:web:3222540610c1b0ac96cdf9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
