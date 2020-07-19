const { Person } = require("../models/person.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

// The method below is new
module.exports.createPerson = (request, response) => {
  const { firstName, lastName, description } = request.body;
  Person.create({
    firstName,
    lastName,
    description,
  })
    .then((person) => response.json(person))
    .catch((err) => response.json(err));
};
