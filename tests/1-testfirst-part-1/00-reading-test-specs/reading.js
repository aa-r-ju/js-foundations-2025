/* eslint-disable no-unused-vars */
function hello(name) {
  if (typeof name === "undefined") {
    return "Hello!";
  } else {
    return `Hello, ${name}!`;
  }
}

function add(number, num) {
  return number + num;
}

/* eslint-env jasmine */
/* eslint-disable no-undef */
let FILL_ME_IN = "Fred";
console.log(hello(FILL_ME_IN));
