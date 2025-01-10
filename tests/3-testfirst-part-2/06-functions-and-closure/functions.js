/* eslint-disable no-unused-vars */
// Function for `concatString`
function concatString() {
  return Array.from(arguments).join("");
}

function yourFunctionRunner() {
  return Array.from(arguments)
    .map((fn) => fn())
    .join("");
}

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

function once(func) {
  let called = false;
  let result;
  return function () {
    if (!called) {
      called = true;
      result = func();
      return result;
    }
    return "the function has already been called...";
  };
}

function createObjectWithClosures() {
  let value = 0;
  return {
    oneIncrementer: function () {
      value += 1;
    },
    tensIncrementer: function () {
      value += 10;
    },
    getValue: function () {
      return value;
    },
    setValue: function (newValue) {
      value = newValue;
    },
  };
}

function dontSpillTheBeans(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}
