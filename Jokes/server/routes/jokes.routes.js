let express = require("express");
let router = express.Router();

router.get("/", function (req, res) {
  res.send("Jokes Home Page");
});

// "/api/jokes" get list of all joke objects

// "/api/jokes/:_id" get joke object with "":_id"

// "/api/jokes/random" get random joke object

// "/api/jokes_new" post a new joke object

// "/api/jokes/updates/:_id" put updated joke object with ":_id"

// "/api/jokes/delete/:_id" delete joke object with "/:_id"
