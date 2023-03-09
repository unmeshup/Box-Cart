import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from  'firebase/compat/app';
import 'firebase/compat/firestore';

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyArL47LzD-oRCg8g9o8EO3xaN1bb68CWrk",
    authDomain: "box-cart-20b15.firebaseapp.com",
    projectId: "box-cart-20b15",
    storageBucket: "box-cart-20b15.appspot.com",
    messagingSenderId: "68891610804",
    appId: "1:68891610804:web:59a9b488469fa0cf6fd1e1"
  };


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



