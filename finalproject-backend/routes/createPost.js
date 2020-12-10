const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();
// const posts = db.collection("allPosts").doc("hello");

router.get("/submit", (req, res) => {
  const queryParams = req.query;
  // const idOfPost = queryParams.id;
  const nameOfPost = queryParams.name;
  const arrayToSet = [];
  console.log(queryParams);
  arrayToSet.push(queryParams.value);

  db.collection("allPosts")
    .doc(nameOfPost)
    .set(
      queryParams
      // arrayToSet
      // comments: firebase.firestore.FieldValue.arrayUnion(),
    )
    // .add(arrayToSet)
    .then()
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
});

module.exports = router;
