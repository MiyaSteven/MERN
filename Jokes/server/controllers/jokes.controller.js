let Jokes = require("../models/jokes.model");

exports.jokes = function (req, res) {
  res.send("Jokes: Jokes List");
};

exports.jokes_content = function (req, res) {
  res.send("");
};

Jokes.find();
