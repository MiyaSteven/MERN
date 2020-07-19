const express = require("express");
const cors = require("cors");

require("./config/mongoose.config");

const app = express();

app.use(express.json());

const routesFunc = require("./routes/full.routes")(app);
routesFunc();

app.get("/", (req, res) => {
  res.json({ hello: "Hello from Express" });
});

app.listen(8000, () => {
  console.log(`Listening on port ${port} for requests to respond to`);
});
