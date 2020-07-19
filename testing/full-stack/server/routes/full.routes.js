const fullController = require("../controllers/full.controller");

module.exports = (app) => {
  // in Django: path("api/cities", views_allCities)
  app.post("/api/cities", fullController.create);
  app.get("/api/cities", fullController.getAll);
  app.get("/api/cities/:id", fullController.getOne);
  app.put("/api/cities/:id", fullController.update);
  app.delete("/api/cities/:id", fullController.delete);
};
