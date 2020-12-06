import axios from "axios";
import React, { useEffect, useState } from "react";

function Create({ userAuthInfo }) {
  //   const [submited, setSubmitted] = useState(false);
  //   useEffect(() => {
  //     axios
  //       .get(`https://stormy-temple-10357.herokuapp.com/create/submit`)
  //       .then()
  //       .catch(function (error) {
  //         console.log("error", error);
  //       });
  //   }, []);

  //   router.get("/", (req, res) => res.send(form));
  return (
    <div>
      <form
        action="https://stormy-temple-10357.herokuapp.com/create/submit"
        method="get"
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
        <input type="text" name="id" value={userAuthInfo.uid} />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default Create;
