const City = require("../models/city.model");
const { json } = require("express");

module.exports = {
  create: function (req, res) {
    City.create(req.body)
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getAll(req, res) {
    console.log("getAll method");
    City.find()
      .then((cities) => {
        res.json(cities);
      })
      .cities((err) => {
        res.json(err);
      });
  },

  getOne(req, res) {
    City.findById(req.params.id)
      .then((city) => {
        city.remove();
      })
      .catch((err) => {
        res.json(err);
      });
  },

  update(req, res) {
    City.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  delete(req, res) {
    City.findByIdAndDelete(req.params.id).then((city) => {
      res.json(city).catch((err) => {
        res.json(err);
      });
    });
  },
};
