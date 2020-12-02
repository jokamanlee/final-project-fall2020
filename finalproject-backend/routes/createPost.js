const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();
const posts = db.collection("posts");

const form = `
    <form action="/create/submit">
        <input type="text" name="title" placeholder="Title of Post"/>
        <button type="submit">Submit Post</>
    </form>
    
`;

router.get("/", (req, res) => res.send(form));

router.get("/submit", (req, res) => {
  const queryParams = req.query;

  const idFromTitle = queryParams.title.replace(/\s+/g, "-").toLowerCase();

  posts
    .doc(idFromTitle)
    .set(queryParams)
    .then(function (doc) {
      res.send("Successful Submission");
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
});

module.exports = router;
