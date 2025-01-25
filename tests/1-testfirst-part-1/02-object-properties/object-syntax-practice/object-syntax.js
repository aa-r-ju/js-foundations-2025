/* eslint-disable no-unused-vars */

// let loud = "loud";

// let name = "Cody";

// let dog = {
//   name,

//   bark() {
//     return "ruff ruff!";
//   },

//   loudBark() {
//     if (loud === "loud") {
//       return this.bark().toUpperCase();
//     }
//     return this.bark();
//   },
// };

let name = "Cody";
let loud = "loud";
let dog = {
  bark() {
    return "ruff ruff!";
  },
  name,
  loudBark() {
    if (loud === "loud") {
      return dog.bark().toUpperCase();
    }
    return dog.bark();
  },
};
