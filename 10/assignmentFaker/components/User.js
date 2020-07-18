const faker = require("faker");

class User {
  constructor() {
    this.id = faker.random.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}
console.log(new User());

// {
//   "users" = [
//     {
//       _id: "1",
//       firstName: "bulbasaur",
//       lastName: "mon",
//       phoneNumber: "1112223333",
//       email: "email@email.com",
//       password: "password",
//     },
//   ];
// }

module.exports = User;
