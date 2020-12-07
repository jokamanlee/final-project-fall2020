import React from "react";

function Create({ userAuthInfo }) {
  return (
    <div>
      <iframe name="hiddenFrame"></iframe>
      <form
        action="https://stormy-temple-10357.herokuapp.com/create/submit"
        method="get"
        target="hiddenFrame"
      >
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder="Name" />
        <label for="text">Text:</label>
        <input
          type="text"
          name="text"
          placeholder="Write what you want to write"
        />
        <input
          type="text"
          id="photo"
          name="photo"
          placeholder="Copy location path of photo)"
        />
        <select id="cat" name="cat">
          <option value="bracelet">Bracelet</option>
          <option value="necklace">Necklace</option>
          <option value="earring">Earring</option>
        </select>
        <input type="text" name="id" value={userAuthInfo.uid} />

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default Create;
