const cityController = require("../controllers/city.controller");

module.exports = (app) => {
  // in Django: path("api/cities", views_allCities)
  app.post("/api/cities", cityController.create);
  app.get("/api/cities", cityController.getAll);
  app.get("/api/cities/:id", cityController.getOne);
  app.put("/api/cities/:id", cityController.update);
  app.delete("/api/cities/:id", cityController.delete);
};
