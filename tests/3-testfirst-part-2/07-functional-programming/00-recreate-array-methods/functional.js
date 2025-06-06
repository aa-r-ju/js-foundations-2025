/* eslint-disable no-unused-vars */

function forEach(arr) {
  arr.forEach((val) => {
    console.log(val);
  });
}

function doubler(n) {
  return n * 2;
}

function map(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

function evenFilter(num) {
  return num;
}

function filter(arr, callback) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function includes(arr, searchVal) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === searchVal) {
        return true;
      }
    }
  } else {
    for (let key in arr) {
      if (arr[key] === searchVal) {
        return true;
      }
    }
  }
  return false;
}

function countWords(total, sentence) {
  const words = sentence.split(" ").filter((word) => word !== "");
  return total + words.length;
}

function reduce(array, start, callback) {
  let accumulator = start;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

function sum(array) {
  return reduce(array, 0, (acc, val) => acc + val);
}

function every(array, callback) {
  return reduce(array, true, (acc, val) => acc && !!callback(val));
}

function some(array, callback) {
  return reduce(array, false, (acc, val) => acc || !!callback(val));
}
