/* eslint-disable no-unused-vars */
let name = "Cody";
let loud = "loud";
let dog = {
  name,
  bark() {
    return "ruff ruff!";
  },
  [loud + "Bark"]() {
    return "RUFF RUFF!";
  },
};
