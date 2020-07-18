const mongoose = require("mongoose");

// {PATH} will insert the name of the key / prop

const JokesSchema = new mongoose.Schema(
  [
    {
      type: String,
      _id: JokeId([true, "{PATH} is required."]),
      setup: "Where do programmers hang out?",
      punchline: "The Foo Bar",
    },
    {
      type: String,
      _id: JokeId([true, "{PATH} is required."]),
      setup: "A SQL query walks into a bar, walks up to two tables and asks...",
      punchline: "Can I join you?",
    },
    {
      type: String,
      _id: JokeId([true, "{PATH} is required."]),
      setup: "What kind of music do planets listen to?",
      punchline: "Nep-tunes",
    },
  ],
  { timestamps: true }
);

// creates the cities collection and enforces the JokesSchema on any new documents that are added to the collection
const Jokes = mongoose.model("joke", JokesSchema);

module.exports = Jokes;
