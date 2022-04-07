const express = require("express");
const app = express();
const cors = require("cors");
const jsonfile = require("jsonfile");
const fs = require("fs");
const posts = require("./posts.json"); //call the posts.json

app.use(cors());
app.use(express.json());

//************************************************************************************************//
//  GET HTTP REQUESTS
//************************************************************************************************//

// default path
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Penguin journals",
  });
});

//pathway for all the posts
app.get("/journal", (req, res) => {
  res.send(posts);
});

//pathway for specific posts by ID
app.get("/journal/:id", (req, res) => {
  const postId = req.params.id - 1;
  let len = posts.length - 1;
  if (postId >= 0 && postId <= len) {
    res.send(posts[postId]);
  } else {
    res.status(404).json({
      Error: `Choose a number between 1 and ${posts.length}`,
    });
  }
});

//************************************************************************************************//
//  POST HTTP REQUESTS
//************************************************************************************************//

app.post("/journal", (req, res) => {
  function isValidPost(post) {
    return (
      post.title &&
      post.title.toString().trim() !== "" &&
      post.Content &&
      post.Content.toString().trim() !== ""
    );
  }

  if (isValidPost(req.body)) {
    var today = new Date();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    const post = {
      id: posts.length + 1,
      title: req.body.title.toString(),
      Content: req.body.Content.toString(),
      emojiOne: 0,
      emojiTwo: 0,
      emojiThree: 0,
      comments: [],
      timeStamp: dateTime,
    };
    jsonfile.readFile("posts.json", (err, data) => {
      data.push(post);
      jsonfile.writeFile("posts.json", data);
    });
  } else {
    res.status(422);
    res.json({
      message: "Sorry! Title and Journal are required!",
    });
  }
});

module.exports = app;
