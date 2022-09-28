import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY-i7t1rWP1Ja7vnVtRosglzlG7jnLkvg",
  authDomain: "coderhouse-prestamo.firebaseapp.com",
  projectId: "coderhouse-prestamo",
  storageBucket: "coderhouse-prestamo.appspot.com",
  messagingSenderId: "404448316891",
  appId: "1:404448316891:web:3e57e787e73050e8552bfe"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
