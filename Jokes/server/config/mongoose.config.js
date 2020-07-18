const mongoose = require("mongoose");
const query = Jokes.find();
query instanceof mongoose.Query;
const db_jokes = await query;

mongoose
  .connect(`mongodb://localhost/${db_jokes}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Successfully connected to ${db_jokes}`);
  })
  .catch((err) => {
    console.log(`Mongoose connection to db ${db_jokes} failed:`, err);
  });
