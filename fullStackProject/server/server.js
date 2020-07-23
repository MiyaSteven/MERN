const port = 8000;
const db_name = "people_db";
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config")(db_name);

const app = express();
// for our server to receive JSON: req.body will be undefined without this!
app.use(express.json());
app.use(cors());

// long-form
// const routesFunc = require("./routes/city.routes");
// routesFunc(app);

// shorthand, import the function from routes.js and then immediately execute it
require("./routes/person.routes")(app);

app.listen(port, () => {
  console.log(`Listening on port ${port} for REQuests to RESpond to.`);
});
