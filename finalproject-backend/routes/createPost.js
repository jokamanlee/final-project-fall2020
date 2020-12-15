const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();

router.get("/", (req, res) => {
  const queryParams = req.query;
  const nameOfPost = queryParams.name;
  const comments = [];

  const likes = 0;

  db.collection("allPosts")
    .doc(nameOfPost)
    .set({
      name: queryParams.name,
      id: queryParams.id,
      photo: queryParams.photo,
      text: queryParams.text,
      cat: queryParams.cat,
      comments: comments,
      likes: likes,
    })

    .then()
    .catch(function (error) {
      res.send("Failed Submission");
    });
});

module.exports = router;
