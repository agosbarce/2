import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAApQ0FZ-PrFKpwT2GAFKURSqnABayYwA",
  authDomain: "proyecto-final-react-85c21.firebaseapp.com",
  projectId: "proyecto-final-react-85c21",
  storageBucket: "proyecto-final-react-85c21.appspot.com",
  messagingSenderId: "466386818159",
  appId: "1:466386818159:web:673eb243c4004acc83e99a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
