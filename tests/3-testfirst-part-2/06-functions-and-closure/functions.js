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

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

function once(fun) {
  let called = false;
  let result;

  return function () {
    if (!called) {
      called = true;
      result = fun();
      return result;
    } else {
      return "the function has already been called...";
    }
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
    setValue: function (val) {
      value = val;
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
