import './App.css';

//Components & Pages to IMPORT
import React, {useEffect, useState} from "react";
import {Route,BrowserRouter as Router, Redirect} from 'react-router-dom'
import Header from "./components/Header";
import Login from "./pages/Login/index.js";
import Logout from "./pages/Logout/index.js";
import Signup from "./pages/Signup/index.js";
import UserProfile from "./pages/UserProfile/index.js";
import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBdj40ceGr0BVLGzt1nDYpNHc72QI_giKQ",
  authDomain: "dynamic-exercise-five.firebaseapp.com",
  databaseURL: "https://dynamic-exercise-five.firebaseio.com",
  projectId: "dynamic-exercise-five",
  storageBucket: "dynamic-exercise-five.appspot.com",
  messagingSenderId: "337664704921",
  appId: "1:337664704921:web:84910ed1c9900bb28dd308",
  measurementId: "G-337664704921",
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

useEffect(() => {
  //initiallize firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  //Set auth to be persistent in SESSION
  // You can also set this as a cookie but we will use
  // it in session storage
  firebase
  .auth()
  .setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .catch(function(error) {
    console.log('error', error);
  });
}, [firebaseConfig])

useEffect(() => {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      setLoggedIn(true);
      setUser(user);
    }else{
      setLoggedIn(false);
      setUser({});
    }
  });

}, [])

function signupFunction(e){
  e.preventDefault();
  //let email = 'bab619@nyu.edu'
  //let password = 'Dreamsmadereal1997!'

  let email = e.currentTarget.createEmail.value
  let password = e.currentTarget.createPassword.value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then(function(response){
      setLoggedIn(true);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function loginFunction(e){
  e.preventDefault();

  let email= e.currentTarget.loginEmail.value;
  let password = e.currentTarget.loginPassword.value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(response) {
      setLoggedIn(true);
    })
    .catch(function(error) {
      console.log('error', error);
    });
}

function logoutFunction(){
  firebase.auth().signOut().then(function() {
    setLoggedIn(false);
  }).catch(function(error) {
    console.log('error',error);
  });
}


  return (
    <div className="App">
    <Header loggedIn={loggedIn} logoutFunction={logoutFunction}/>
      <Router>

        <Route exact path="/">
          { loggedIn ? <UserProfile user={user}/> : <Redirect to="login" />}
        </Route>

        <Route exact path="/login">
         { loggedIn ? <Redirect to="/"/> : <Login loginFunction={loginFunction} />}
        </Route>

        <Route exact path="/sign-up">
           { loggedIn ? <Redirect to="/"/> : <Signup signupFunction={signupFunction} />}
        </Route>

      </Router>
    </div>
  );
}

export default App;
