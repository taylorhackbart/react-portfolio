const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const databaseUrl = "portfolio";
const collections = ["users"];
const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

db.on("error", error => {
  console.log("Database Error:", error);
});

app.post("/contact/submit", ({ body }, res) => {
  const user = body;

  db.users.savePost(user, (error, saved) => {
    if (error) {
      console.log(error);
    } else {
      res.send(saved);
    }
  });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
