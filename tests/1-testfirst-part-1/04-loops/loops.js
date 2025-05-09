/* eslint-disable no-unused-vars */
function repeat(str, num) {
  let newVal = "";
  for (let i = 0; i < num; i++) {
    newVal += str;
  }
  return newVal;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function join(arr, delimiter = "") {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i !== arr.length - 1) {
      str += delimiter;
    }
  }
  return str;
}
const fruitArray = ["apple", "banana", "cherry"];
join(fruitArray);

function gridGenerator(size) {
  if (size === 0) return "";
  let result = "";
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      result += (row + col) % 2 === 0 ? "#" : " ";
    }
    result += "\n";
  }
  return result;
}

function paramify(obj) {
  const keys = [];

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.push(key);
    }
  }

  keys.sort();

  const pairs = [];
  keys.forEach((key) => {
    pairs.push(`${key}=${obj[key]}`);
  });

  return pairs.join("&");
}

function paramifyObjectKeys(obj) {
  let keys = Object.keys(obj).sort();
  let params = "";
  for (let i = 0; i < keys.length; i++) {
    if (i !== 0) params += "&";
    params += keys[i] + "=" + obj[keys[i]];
  }
  return params;
}

function sort(arr) {
  let result = arr.slice();
  for (let i = 0; i < result.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = result[i];
      result[i] = result[minIndex];
      result[minIndex] = temp;
    }
  }
  return result;
}
