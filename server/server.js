const port = 8000;
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hello: "Hello from Express" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port} for requests to respond to`);
});
