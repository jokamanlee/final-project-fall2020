const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();

router.get("/submit", (req, res) => {
  const queryParams = req.query;
  const username = queryParams.username;

  db.collection("allUsers")
    .doc(username)
    .set(queryParams)
    .then()
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
});

module.exports = router;
