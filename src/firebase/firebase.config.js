// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKkrRpdY_oYlNMyuWLZLA7GNcOYWe4CSs",
  authDomain: "aircnc-be601.firebaseapp.com",
  projectId: "aircnc-be601",
  storageBucket: "aircnc-be601.appspot.com",
  messagingSenderId: "793934933633",
  appId: "1:793934933633:web:6e04842df0f7301a7ee780"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;