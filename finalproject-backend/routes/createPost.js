const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();
const posts = db.collection("allPosts");

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

  // const idFromName = queryParams.name.replace(/\s+/g, "-").toLowerCase();
  const idOfPost = queryParams.id;

  posts
    .doc(idOfPost)
    .set(queryParams)
    .then(function (doc) {
      console.log(queryParams);
      res.send(queryParams);
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
});

module.exports = router;
