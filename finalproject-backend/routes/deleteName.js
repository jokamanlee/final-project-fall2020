const express = require("express");

const router = express.Router();

const firebase = require("firebase");

const db = firebase.firestore();

const users = db.collection("allUsers");

router.get("/", (req, res) => {
  const queryParams = req.query;
  users
    .doc(queryParams.id)
    .delete()
    .then()
    .catch(function (error) {
      res.send("error removing doc: ", error);
    });
});

module.exports = router;
