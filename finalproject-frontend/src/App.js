import "./App.css";

import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "./App.css";
import Home from "./containers/Home";

import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";
import Create from "./containers/Create";
import CreateUsername from "./containers/CreateUsername";

import Header from "./components/Header";
import Bracelet from "./containers/Bracelets";
import Necklace from "./containers/Necklaces";
import Earring from "./containers/Earrings";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "final-project-fall-2020.firebaseapp.com",
  databaseURL: "https://final-project-fall-2020.firebaseio.com",
  projectId: "final-project-fall-2020",
  storageBucket: "final-project-fall-2020.appspot.com",
  messagingSenderId: "927979344251",
  appId: "1:927979344251:web:c0024880058149e47b6dde",
  measurementId: "G-8RKW7H3DZF",
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [justCreated, setJustCreated] = useState(false);
  const [userAuthInfo, setUserAuthInfo] = useState({});

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setLoggedIn(true);
        setUserAuthInfo(user);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  function LoginFunction(e) {
    //this is what you will run when you want to log in
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("LOGIN RESPONSE", response);
        setLoggedIn(true);
      })
      .catch(function (response) {
        console.log("LOGIN RESPONSE", response);
      })
      .catch(function (error) {
        console.log("LOGIN ERROR", error);
      });
  }
  function LogoutFunction() {
    //Function to run when you want to log out...
    firebase
      .auth()
      .signOut()
      .then(function () {
        setLoggedIn(false);
        setUserAuthInfo({});
      })
      .catch(function (error) {
        console.log("LOGOUT ERROR", error);
      });
  }
  function CreateAccountFunction(e) {
    //what will run when you create an account...
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("VALID ACCOUNT CREATED FOR:", email, response);
        setJustCreated(true);
        setLoggedIn(true);
      })

      .catch(function (error) {
        console.log("ACCOUNT CREATION FAILED", error);
      });
  }
  console.log(justCreated);
  if (loading) return null;
  return (
    <div className="App">
      <Header loggedIn={loggedIn} LogoutFunction={LogoutFunction} />
      <Router>
        <Route exact path="/login">
          {!loggedIn ? (
            <Login LoginFunction={LoginFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/create-account">
          {!loggedIn ? (
            <CreateAccount CreateAccountFunction={CreateAccountFunction} />
          ) : (
            <Redirect to="/user-profile" />
          )}
        </Route>
        <Route exact path="/create-username">
          {justCreated ? (
            <Redirect to="/user-profile" />
          ) : (
            <CreateUsername
              userAuthInfo={userAuthInfo}
              justCreated={justCreated}
            />
          )}
        </Route>
        <Route exact path="/user-profile">
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <UserProfile
              userAuthInfo={userAuthInfo}
              justCreated={justCreated}
            />
          )}
        </Route>
        <Route exact path="/create">
          <Create userAuthInfo={userAuthInfo} />
        </Route>
        <Route exact path="/bracelet">
          <Bracelet />
        </Route>
        <Route exact path="/necklace">
          <Necklace />
        </Route>
        <Route exact path="/earring">
          <Earring />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
