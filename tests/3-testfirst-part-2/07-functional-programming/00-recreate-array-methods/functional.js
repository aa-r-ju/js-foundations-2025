/* eslint-disable no-unused-vars */

// 1. forEach Implementation
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// 2. map Implementation
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

// Doubler function
function doubler(value) {
  return value * 2;
}

// 3. filter Implementation
function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

// 4. includes Implementation
function includes(collection, value) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] === value) return true;
    }
  } else {
    for (let key in collection) {
      if (collection[key] === value) return true;
    }
  }
  return false;
}

// 5. reduce Implementation
function reduce(array, initialValue, callback) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

// Word counting utility
function countWords(total, sentence) {
  return total + sentence.split(" ").length;
}

// 6. every Implementation
function every(array, callback) {
  return reduce(array, true, (acc, value) => acc && callback(value));
}

// 7. some Implementation
function some(array, callback) {
  return reduce(array, false, (acc, value) => acc || callback(value));
}

// 8. sum Function
function sum(array) {
  return reduce(array, 0, (a, b) => a + b);
}
