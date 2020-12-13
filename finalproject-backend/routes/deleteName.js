const express = require("express");

const router = express.Router();

const firebase = require("firebase");

const db = firebase.firestore();

const users = db.collection("allUsers");

router.get("/", (req, res) => {
  const queryParams = req.query;
  console.log(queryParams.name);
  users
    .doc(queryParams.name)
    .delete()
    .then()
    .catch(function (error) {
      console.log("error removing doc: ", error);
    });
});

module.exports = router;
