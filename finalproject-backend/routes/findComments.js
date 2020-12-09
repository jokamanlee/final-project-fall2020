const express = require("express");
const router = express.Router();

const firebase = require("firebase");

const db = firebase.firestore();

const posts = db.collection("allPosts");

router.get("/:name", (req, res) => {
  const postsArray = [];
  const queryId = req.params.id;
  posts
    .collection()
    .where("id", "==", queryId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        postsArray.push(doc.data());
      });
      return res.send(postsArray);
    })
    .catch(function (e) {
      console.warn("error", e);
      return res.send(error);
    });
});

module.exports = router;
