// contains the functions that will be executed when the corresponding route URL is visited
const { Person } = require("../models/person.model");

module.exports = {
  // long-form key: value
  //               (request, response)
  createPerson: function (req, res) {
    Person.create(req.body)
      // first param of callback passed to .then will be the newly created document from the database
      .then((person) => {
        res.json(person);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getAllPeople(req, res) {
    // console.log("getAll method");
    Person.find()
      .then((people) => {
        res.json(people);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getPerson(req, res) {
    // City.find({ _id: req.params.id })
    Person.findById(req.params.id)
      .then((person) => {
        res.json(person);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  updatePerson(req, res) {
    Person.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((person) => {
        res.json(person);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  deletePerson(req, res) {
    // City.deleteOne({ _id: req.params.id })
    Person.findByIdAndDelete(req.params.id)
      .then((person) => {
        res.json(person);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
