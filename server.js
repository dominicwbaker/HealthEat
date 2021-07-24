const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
var cors = require('cors')
const app = express();
require('dotenv').config()
const passport = require('passport');
//dont forget to install on your local npm
const GoogleStrategy = require('passport-google-oauth20').Strategy;

app.use(cors())

const PORT = process.env.PORT || 3001;

app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//creates passport session
app.use(passport.initialize());
app.use(passport.session());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/healtheat");


// Add routes, both API and view
const routes = require("./routes");
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
