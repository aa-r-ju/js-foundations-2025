/* eslint-disable no-unused-vars */

let loud = "loud";

let name = "Cody";

let dog = {
  name,

  bark() {
    return "ruff ruff!";
  },

  loudBark() {
    if (loud === "loud") {
      return this.bark().toUpperCase();
    }
    return this.bark();
  },
};
