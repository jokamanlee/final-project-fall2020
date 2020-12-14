import React from "react";
import LoginForm from "../components/LoginForm";

function Login({ LoginFunction }) {
  return (
    <div className="account">
      <p className="titlePage">Login</p>
      <div className="accountForm">
        <LoginForm LoginFunction={LoginFunction} />
      </div>
    </div>
  );
}

export default Login;
