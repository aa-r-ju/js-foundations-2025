/* eslint-disable no-unused-vars */
// Function to repeat a string multiple times
function repeat(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function join(arr, delimiter = "") {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      result += delimiter;
    }
  }
  return result;
}

function gridGenerator(size) {
  let result = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      result += (i + j) % 2 === 0 ? "#" : " ";
    }
    result += "\n";
  }
  return result;
}

function paramify(obj) {
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(`${key}=${obj[key]}`);
    }
  }
  return result.sort().join("&");
}

function paramifyObjectKeys(obj) {
  return Object.keys(obj)
    .sort()
    .map((key) => `${key}=${obj[key]}`)
    .join("&");
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
