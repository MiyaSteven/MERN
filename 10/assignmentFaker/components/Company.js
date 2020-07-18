const faker = require("faker");

class Company {
  constructor() {
    this.id = faker.random.uuid();
    this.name = faker.name.findName();
    this.address = faker.address.address();
  }
}
console.log(new Company());

// {
//   "company" = [
//     {
//       _id: "1",
//       name: "A Co.",
//       address: {
//         street: "1st St",
//         city: "Pallet",
//         state: "PokeVerse",
//         zipCode: "00001",
//         country: "Blue",
//       },
//     },
//   ];
// }

module.exports = Company;
