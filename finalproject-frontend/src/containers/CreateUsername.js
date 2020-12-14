import React from "react";

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
      .then()
      .catch(function (error) {
        console.log("ERROR_CREATING_POST", error);
      });
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <form onSubmit={(e) => createName(e)}>
        <input
          class="createName"
          type="text"
          name="username"
          placeholder="Type your name..."
        ></input>
        <input type="hidden" name="id" value={userAuthInfo.uid} />
        <button type="submit" onClick={refreshPage}>
          Submit Name
        </button>
      </form>
    </div>
  );
}

export default CreateUsername;
