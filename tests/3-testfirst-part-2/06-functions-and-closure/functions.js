/* eslint-disable no-unused-vars */
function concatString() {
  return Array.from(arguments).join("");
}
console.log(concatString("This", " ", "should", " ", "be done with join"));

function yourFunctionRunner() {
  return Array.from(arguments)
    .map((fun) => fun())
    .join("");
}
