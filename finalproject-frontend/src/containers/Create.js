import axios from "axios";
import React, { useEffect, useState } from "react";

function Create() {
  //   const [submited, setSubmitted] = useState(false);
  useEffect(() => {
    axios.post(
      `https://stormy-temple-10357.herokuapp.com/create/submit`
        .then((res) => console.log("Data send"))
        .catch(function (error) {
          console.log("error", error);
        })
    );
  }, []);
  return (
    <div>
      <form action="https://stormy-temple-10357.herokuapp.com/create/submit">
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder="Name" />
        <label for="text">Text:</label>
        <input
          type="text"
          name="text"
          placeholder="Write what you want to write"
        />
        <input type="file" id="photo" name="photo" />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default Create;
