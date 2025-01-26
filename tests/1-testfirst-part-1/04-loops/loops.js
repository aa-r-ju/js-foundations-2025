// /* eslint-disable no-unused-vars */
// // Function to repeat a string multiple times
// function repeat(str, num) {
//   let result = "";
//   for (let i = 0; i < num; i++) {
//     result += str;
//   }
//   return result;
// }

// function sum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// function join(arr, delimiter = "") {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//     if (i < arr.length - 1) {
//       result += delimiter;
//     }
//   }
//   return result;
// }

// function gridGenerator(size) {
//   let result = "";
//   for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//       result += (i + j) % 2 === 0 ? "#" : " ";
//     }
//     result += "\n";
//   }
//   return result;
// }

// function paramify(obj) {
//   let result = [];
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       result.push(`${key}=${obj[key]}`);
//     }
//   }
//   return result.sort().join("&");
// }

// function paramifyObjectKeys(obj) {
//   return Object.keys(obj)
//     .sort()
//     .map((key) => `${key}=${obj[key]}`)
//     .join("&");
// }

// function sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

function repeat(value, times) {
  let str = "";
  for (let i = 0; i < times; i++) {
    str += value;
  }
  return str;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function join(array, delimiter = "") {
  let jointValue = "";
  for (let i = 0; i < array.length; i++) {
    jointValue += array[i];
    if (i < array.length - 1) {
      jointValue += delimiter;
    }
  }
  return jointValue;
}

function gridGenerator(size) {
  if (size === 0) return "";

  let grid = "";

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      grid += (row + col) % 2 === 0 ? "#" : " ";
    }
    grid += "\n";
  }

  return grid;
}

function paramify(obj) {
  let arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(`${key}=${obj[key]}`);
    }
  }
  return arr.sort().join("&");
}

function paramifyObjectKeys(obj) {
  return Object.keys(obj)
    .sort()
    .map((key) => `${key}=${obj[key]}`)
    .join("&");
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], "iii");
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[j], "jjjj");
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

sort(["toad", "prune", "pretzel", "aardvark", "tuna", "weasel"]);
