const { request } = require("express");
const express = require("express");

const router = express.Router();

const firebase = require("firebase");

const db = firebase.firestore();

const posts = db.collection("allPosts");

router.get("/", (req, res) => {
  const queryParams = req.query;
  const increment = firebase.firestore.FieldValue.increment(queryParams.likes);
  posts
    .doc(queryParams.name)
    .update(
      {
        likes: increment,
      },

      { merge: true }
    )
    .then()
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
