const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();
// const posts = db.collection("allPosts").doc("hello");

router.get("/submit", (req, res) => {
  const queryParams = req.query;
  // const idOfPost = queryParams.id;
  const nameOfPost = queryParams.name;

  db.collection("allPosts")
    .doc(nameOfPost)
    .set(queryParams, {
      comments: firebase.firestore.FieldValue.arrayUnion(),
    })
    .then()
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
});

module.exports = router;
