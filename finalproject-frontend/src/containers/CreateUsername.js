import React from "react";

function CreateUsername({ userAuthInfo, justCreated }) {
  return (
    <div>
      <iframe name="hiddenFrame"></iframe>
      <form
        action="https://stormy-temple-10357.herokuapp.com/createName/submit"
        target="hiddenFrame"
        onSubmit={(justCreated = false)}
      >
        <input type="text" name="username"></input>
        <input type="text" name="id" value={userAuthInfo.uid} />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default CreateUsername;
