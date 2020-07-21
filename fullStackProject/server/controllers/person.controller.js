const { Person } = require("../models/person.model");
const { response } = require("express");

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
    price,
    description,
  })
    .then((person) => response.json(person))
    .catch((err) => response.json(err));
};

module.exports.getAllPeople = (req, res) => {
  Person.find({})
    .then((persons) => res.json(persons))
    .catch((err) => res.json(err));
};

module.exports.getPerson = (req, res) => {
  Person.find({ _id: req.params.id })
    .then((person) => res.json(person))
    .catch((err) => res.json(err));
};
