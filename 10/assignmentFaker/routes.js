const userController = require("./components/User");
const companyController = require("./components/Company");
// const userCompanyController = require("./components/UserCompany")

module.exports = (app) => {
  // in Django: path("api/cities", views.all_cities)
  app.post("/api/users/new", userController.create);
  app.post("/api/companies/new", companyController.create);
  // app.post("/api/user/company", userCompanyController.create);
  app.get("/api/users", userController.getAll);
  app.get("/api/users/:id", userController.getOne);
  // if we used this route it would never be triggered because the :id above would think "recommended" was the id, solution: move this above :id route
  // app.get("/api/cities/recommended", userController.recommended);
  app.put("/api/cities/:id", userController.update);
  app.delete("/api/cities/:id", userController.delete);
};
