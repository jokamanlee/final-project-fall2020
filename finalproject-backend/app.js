const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: "final-project-fall-2020.firebaseapp.com",
//   databaseURL: "https://final-project-fall-2020.firebaseio.com",
//   projectId: "final-project-fall-2020",
//   storageBucket: "final-project-fall-2020.appspot.com",
//   messagingSenderId: "927979344251",
//   appId: "1:927979344251:web:c0024880058149e47b6dde",
//   measurementId: "G-8RKW7H3DZF",
// };

// const firebase = require("firebase");
// firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");
// const postRoute = require("./routes/post.js");
// const createRoute = require("./routes/createPost.js");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", indexRoute);
// app.use("/post", postRoute);
// app.use("/create", createRoute);

app.listen(port, () => console.log(`Backend is running at localhost:${port}`));
