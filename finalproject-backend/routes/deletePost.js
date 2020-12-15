const express = require("express");

const router = express.Router();

const firebase = require("firebase");

const db = firebase.firestore();

const posts = db.collection("allPosts");

router.get("/", (req, res) => {
  const queryParams = req.query;
  posts
    .doc(queryParams.name)
    .delete()
    .then()
    .catch(function (error) {
      console.log("error removing doc: ", error);
    });
});

module.exports = router;
