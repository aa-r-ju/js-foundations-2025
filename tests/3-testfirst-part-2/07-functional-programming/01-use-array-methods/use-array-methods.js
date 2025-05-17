/* eslint-disable no-unused-vars */
function indexAndValue(arr) {
  return arr.map((value, index) => ({ index, value }));
}

function capitalize(val) {
  return val.toUpperCase();
}

function swapCase(str) {
  return str
    .split(" ")
    .map((word, index) => (index % 2 === 0 ? capitalize(word) : word))
    .join(" ");
}
