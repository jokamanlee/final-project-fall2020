import axios from "axios";
import React from "react";

function Create({ userAuthInfo }) {
  function submitPost(e) {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const text = e.currentTarget.text.value;
    const photo = e.currentTarget.photo.value;
    const cat = e.currentTarget.cat.value;
    const userId = userAuthInfo.uid;

    axios
      .get(
        `https://stormy-temple-10357.herokuapp.com/create?name=${name}&text=${text}&photo=${photo}&cat=${cat}&id=${userId}`
      )
      .then(function (response) {
        console.log({ SUCCESS: response });
      })
      .catch(function (error) {
        console.log("ERROR_CREATING_POST", error);
      });
  }
  return (
    <div>
      <form onSubmit={(e) => submitPost(e)}>
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
        <input type="hidden" name="id" value={userAuthInfo.uid} />
        <input type="hidden" name="comments[]" />

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default Create;
