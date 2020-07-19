const City = require("../models/full.model");
const { json } = require("express");

module.exports = {
  create: function (req, res) {
    Full.create(req.body)
      .then((full) => {
        res.json(full);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getAll(req, res) {
    console.log("getAll method");
    Full.find()
      .then((allFull) => {
        res.json(allFull);
      })
      .allFull((err) => {
        res.json(err);
      });
  },

  getOne(req, res) {
    Full.findById(req.params.id)
      .then((full) => {
        full.remove();
      })
      .catch((err) => {
        res.json(err);
      });
  },

  update(req, res) {
    Full.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((full) => {
        res.json(full);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  delete(req, res) {
    Full.findByIdAndDelete(req.params.id).then((full) => {
      res.json(full).catch((err) => {
        res.json(err);
      });
    });
  },
};
