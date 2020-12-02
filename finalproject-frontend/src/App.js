import "./App.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "./App.css";
import Home from "./containers/Home";

import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";

import Header from "./components/Header";

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
  const [userInformation, setUserInformation] = useState({});
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setLoggedIn(true);
        setUserInformation({ user });
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/post/hi`)
      .then(function (response) {
        if (response.data) {
          setAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
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
        setUserInformation({});
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
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("ACCOUNT CREATION FAILED", error);
      });
  }
  if (loading) return null;
  return (
    <div className="App">
      <Header loggedIn={loggedIn} LogoutFunction={LogoutFunction} />
      <Router>
        <Route exact path="/login">
          {/*if someone is logged in do not take them to login page - take them to user profile*/}
          {!loggedIn ? (
            <Login LoginFunction={LoginFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/create-account">
          {/*if someone is logged in do not take them to create account page - take them to user profile*/}
          {!loggedIn ? (
            <CreateAccount CreateAccountFunction={CreateAccountFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/">
          {/*if someone is not logged in do not take them to user profile page - take them to login*/}
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <UserProfile userInformation={userInformation} />
          )}
        </Route>
      </Router>
    </div>
  );
}

export default App;
