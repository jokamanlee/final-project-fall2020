import React, { useState } from "react";

import axios from "axios";

function CreateUsername({ userAuthInfo }) {
  function createName(e) {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const id = e.currentTarget.id.value;
    axios
      .get(
        `https://stormy-temple-10357.herokuapp.com/createName/submit?username=${username}&id=${id}`
      )
      .then(function (response) {
        console.log({ SUCCESS: response });
      })
      .catch(function (error) {
        console.log("ERROR_CREATING_POST", error);
      });
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div class="createName">
      <form onSubmit={(e) => createName(e)}>
        <input type="text" name="username"></input>
        <input type="hidden" name="id" value={userAuthInfo.uid} />
        <button type="submit" onClick={refreshPage}>
          Submit Name
        </button>
      </form>
    </div>
  );
}

export default CreateUsername;
