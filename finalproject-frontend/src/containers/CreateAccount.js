import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";

function CreateAccount({ CreateAccountFunction }) {
  return (
    <div className="account">
      <p className="titlePage">Create New Account</p>
      <div className="accountForm">
        <CreateAccountForm CreateAccountFunction={CreateAccountFunction} />
      </div>
    </div>
  );
}

export default CreateAccount;
