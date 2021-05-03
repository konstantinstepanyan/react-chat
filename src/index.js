import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'




firebase.initializeApp({
    apiKey: "AIzaSyBesn4OyQ_N8em_5YiwaHpqAl1EJlqHKYI",
    authDomain: "chat-react-1bfc1.firebaseapp.com",
    projectId: "chat-react-1bfc1",
    storageBucket: "chat-react-1bfc1.appspot.com",
    messagingSenderId: "305343107467",
    appId: "1:305343107467:web:33d74c80148aeb94f4df8e",
    measurementId: "G-90F4NWNRHB"
  });


export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
    
        <App />
    
    </Context.Provider>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);