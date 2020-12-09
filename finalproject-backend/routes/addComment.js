const express = require("express");
const router = express.Router();
const firebase = require("firebase");
// const admin = require("firebase-admin");
const db = firebase.firestore();

// const posts = db.collection("allPosts").doc("hello");

router.get("/", (req, res) => {
  const queryParams = req.query;
  const nameOfPost = queryParams.name;

  db.collection("allPosts")
    .doc(nameOfPost)
    // .doc("fds")

    // .update({ comments: queryParams.comment }, { merge: true })

    .update({
      comments: firebase.firestore.FieldValue.arrayUnion(queryParams.comment),
    })
    .then(res.send("Yay"))
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Comment");
    });
});

module.exports = router;
