const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();

router.get("/", (req, res) => {
  const queryParams = req.query;
  const commentAndtime = `${queryParams.comment} ${queryParams.time}`;

  db.collection("allPosts")
    .doc(queryParams.name)

    .update(
      {
        comments: firebase.firestore.FieldValue.arrayUnion(commentAndtime),
      },
      { merge: true }
    )
    .then()
    .catch(function (error) {
      res.send("Failed Comment");
    });
});

module.exports = router;
