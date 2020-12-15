const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();

router.get("/submit", (req, res) => {
  const queryParams = req.query;

  db.collection("allUsers")
    .doc(queryParams.id)
    .set(queryParams)
    .then()
    .catch(function (error) {
      res.send("Failed Submission");
    });
});

module.exports = router;
