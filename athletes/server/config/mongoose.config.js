const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/nba_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Established connection");
  })
  .catch(() => {
    console.log("There has been an error");
  });
