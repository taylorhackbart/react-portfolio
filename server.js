const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan")
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(morgan("dev"))

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);
// Connect to the Mongo DB
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/portfolio", options, (err)  => { 
    if (err) throw err;
    console.log("DB connection established")
}
);

// Start the API server 
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

