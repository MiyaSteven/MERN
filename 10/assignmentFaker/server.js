const express = require("express");
const faker = require("faker");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hello: "Hello from Express" });
});

app.listen(8000, () => {
  console.log(`Listening on port ${port} for requests to respond to`);
});
