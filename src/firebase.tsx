import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDtKxNUx7GiMcHTy4HIDaYaSFjUAj-RNIM",
    authDomain: "dogmap-fe1c5.firebaseapp.com",
    databaseURL: "https://dogmap-fe1c5.firebaseio.com",
    projectId: "dogmap-fe1c5",
    storageBucket: "dogmap-fe1c5.appspot.com",
    messagingSenderId: "945257816849",
    appId: "1:945257816849:web:474b58e49c9e1bec0ba2b0",
    measurementId: "G-R3PK8WXGF8"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export default auth;