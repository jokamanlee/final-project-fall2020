const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();

router.get("/", (req, res) => {
  const queryParams = req.query;
  console.log(queryParams);
  db.collection("allPosts")
    .doc(queryParams.name)

    .update(
      {
        comments: firebase.firestore.FieldValue.arrayUnion(
          queryParams.comment,
          queryParams.time
        ),
      },
      { merge: true }
    )
    .then()
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Comment");
    });
});

module.exports = router;
