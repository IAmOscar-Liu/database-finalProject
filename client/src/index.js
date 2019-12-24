import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC0DBRR8haP41-6zo7vw5JvVjVnqS3CzYQ",
    authDomain: "firebasics-f5c4c.firebaseapp.com",
    databaseURL: "https://firebasics-f5c4c.firebaseio.com",
    projectId: "firebasics-f5c4c",
    storageBucket: "firebasics-f5c4c.appspot.com",
    messagingSenderId: "855509520491",
    appId: "1:855509520491:web:8870d368a6d413ce" 
  };
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
