/* eslint-disable no-unused-vars */

let dog = {
  bark() {
    return "ruff ruff!";
  },

  name: "Cody",

  loudBark() {
    return this.bark().toUpperCase();
  },
};
