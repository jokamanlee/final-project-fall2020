const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();
const posts = db.collection("posts");

const form = `
    <form action="/create/submit">
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder="Name"/>
        <label for="text">Text:</label>
        <input type="text" name="text" placeholder="Write what you want to write"/>
        <input type="text" id="photo" name="photo" placeholder="Link to the photo(link must end in photo form like .jpg)"/>
        <button type="submit">Submit Post</>
    </form>

`;

router.get("/", (req, res) => res.send(form));

router.get("/submit", (req, res) => {
  const queryParams = req.query;
  // const storageRef = firebase.storage().ref();
  // const photoRef = storageRef.child("cat.png");

  // const photoImagesRef = storageRef.child("Desktop/cat.png");

  // const file = photoImagesRef;
  // ref.put(file).then(function (snapshot) {
  //   console.log("Uploaded a blob or file!");
  // });
  // const selectedFile = document.getElementById("photo").files[0];

  const idFromName = queryParams.name.replace(/\s+/g, "-").toLowerCase();

  posts
    .doc(idFromName)
    .set(queryParams)
    .then(function (doc) {
      console.log(queryParams);
      res.send("Successful Submission");
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
});

module.exports = router;
