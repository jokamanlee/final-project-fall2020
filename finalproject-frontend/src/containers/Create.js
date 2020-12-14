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
      .then()
      .catch(function (error) {
        console.log("ERROR_CREATING_POST", error);
      });
  }
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="createPost">
      <form className="createForm" onSubmit={(e) => submitPost(e)}>
        <div className="extraColumn">
          <label createName="createLabel" for="name">
            Post Title:
          </label>
          <input
            className="createInput"
            type="text"
            name="name"
            placeholder="Name"
          />
          <label createName="createLabel" for="text">
            Text:
          </label>
          <input
            className="createInput"
            type="text"
            name="text"
            placeholder="Write what you want to write"
          />
          <label createName="createLabel" for="photo">
            Photo Location:
          </label>
          <input
            className="createInput"
            type="text"
            id="photo"
            name="photo"
            placeholder="Copy location path of photo)"
          />
        </div>
        <div className="extraColumnSmaller">
          <select className="createInput" id="cat" name="cat">
            <option value="bracelet">Bracelet</option>
            <option value="necklace">Necklace</option>
            <option value="earring">Earring</option>
          </select>
          <input type="hidden" name="id" value={userAuthInfo.uid} />
          <input type="hidden" name="comments[]" />

          <button
            className="submitPostButton"
            type="submit"
            onClick={refreshPage}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
