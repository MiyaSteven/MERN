const PersonController = require("../controllers/person.controller");

module.exports = function (app) {
  app.get("/api", PersonController.index);
  app.post("/api/people", PersonController.createPerson);
  // app.get("/api/people/:id", PersonController.getOnePerson);
  // app.put("/api/people/:id", PersonController.updatePerson);
  // app.delete("/api/people/:id", PersonController.deletePerson);
};
