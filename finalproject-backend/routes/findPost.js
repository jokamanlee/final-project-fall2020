const express = require("express");
const router = express.Router();

const firebase = require("firebase");

const db = firebase.firestore();

const posts = db.collection("allPosts");

const docRef = posts.doc("gKvyblkxY9OuP5fLQUc9nOM72fk2");
console.log(docRef);
docRef
  .get()
  .then(function (doc) {
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      console.log("No such document!");
    }
  })
  .catch(function (error) {
    console.log("Error getting document:", error);
  });

module.exports = router;
