const mongoose = require("mongoose");
const db_name = "people_db";

mongoose
  .connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Established a connection to the database");
  })
  .catch((err) => {
    console.log("Something went wrong when connecting to the database", err);
  });
