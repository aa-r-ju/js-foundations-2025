// All of the recursive functions are pre-defined for you. Keep in mind, you need to determine
// their arguments! Keep in mind, there are a few test specs that require functions that are not solved
// recursively (you need to define those functions on your own).

/* eslint-disable no-unused-vars */

// function factorial() {

// }

// function sumTheDigits() {

// }

// function countTheVowels() {

// }

// function recSmallestInt() {

// }

// function fib() {

// }

// function stringify() {

// }

// function search() {

// }

// function recursiveMap() {

// }

// function factorialIterative(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// function factorial(n) {
//   if (n === 0) return 1; // Base case
//   return n * factorial(n - 1); // Recursive case
// }
// function sumTheDigits(arr) {
//   if (arr.length === 0) return 0; // Base case
//   return arr[0] + sumTheDigits(arr.slice(1)); // Recursive case
// }
// function countTheVowels(str) {
//   const vowels = "aeiou";
//   if (str.length === 0) return 0; // Base case
//   const count = vowels.includes(str[0].toLowerCase()) ? 1 : 0;
//   return count + countTheVowels(str.slice(1)); // Recursive case
// }
// function recSmallestInt(arr) {
//   if (arr.length === 1) return arr[0]; // Base case
//   const restSmallest = recSmallestInt(arr.slice(1)); // Recursive case
//   return arr[0] < restSmallest ? arr[0] : restSmallest;
// }
// function fib(n) {
//   if (n === 0 || n === 1) return 1; // Base cases
//   return fib(n - 1) + fib(n - 2); // Recursive case
// }
// function type(value) {
//   const rawType = Object.prototype.toString.call(value);
//   return rawType.slice(8, -1); // Extracts "Type" from "[object Type]"
// }
// function stringify(input) {
//   const t = type(input);

//   if (t === "Undefined") return "undefined";
//   if (t === "Null") return "null";
//   if (t === "Boolean") return input.toString();
//   if (t === "Number") return input.toString();
//   if (t === "String") return `"${input}"`;

//   if (t === "Array") {
//     return `[${input.map(stringify).join(",")}]`;
//   }

//   if (t === "Object") {
//     const entries = Object.entries(input).map(
//       ([key, value]) => `"${key}":${stringify(value)}`
//     );
//     return `{${entries.join(",")}}`;
//   }

//   throw new Error(`Unsupported type: ${t}`);
// }
// function search(matchingFunction) {
//   // Iterate through the current array (this is the contextual array).
//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];

//     // If the element is an array, recursively call the search function on the nested array.
//     if (Array.isArray(element)) {
//       // Use Function.prototype.call to provide the correct context for recursion.
//       if (search.call(element, matchingFunction)) {
//         return true;
//       }
//     } else {
//       // If the element satisfies the matching function, return true.
//       if (matchingFunction(element)) {
//         return true;
//       }
//     }
//   }

//   // If no match is found, return false.
//   return false;
// }

// function recursiveMap(array, mappingFunction) {
//   return array.reduce((acc, element) => {
//     if (Array.isArray(element)) {
//       // If the element is an array, process it recursively
//       return acc.concat(recursiveMap(element, mappingFunction));
//     }
//     // Otherwise, apply the mapping function to the element
//     return acc.concat(mappingFunction(element));
//   }, []);
// }

/* eslint-env jasmine */
/* eslint-disable no-undef */

JavaScript;

/* eslint-env jasmine */
/* eslint-disable no-undef */

function factorialIterative(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function sumTheDigits(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumTheDigits(arr.slice(1));
}

function countTheVowels(str) {
  if (str === "") {
    return 0;
  }
  const vowels = "aeiou";
  if (vowels.includes(str[0])) {
    return 1 + countTheVowels(str.slice(1));
  }
  return countTheVowels(str.slice(1));
}

function recSmallestInt(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return Math.min(arr[0], recSmallestInt(arr.slice(1)));
}

function fib(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

function type(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

function stringify(value) {
  if (typeof value !== "object" || value === null) {
    return typeof value === "string" ? `"${value}"` : String(value);
  }

  if (Array.isArray(value)) {
    return `[${value.map(stringify).join(",")}]`;
  }

  const entries = Object.entries(value);
  return `{${entries
    .map(([key, val]) => `"${key}":${stringify(val)}`)
    .join(",")}}`;
}

function search(fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      return true;
    }
    if (Array.isArray(this[i]) && search.call(this[i], fn)) {
      return true;
    }
  }
  return false;
}

function recursiveMap(arr, fn) {
  if (arr.length === 0) {
    return [];
  }

  const [head, ...tail] = arr;

  if (Array.isArray(head)) {
    return [...recursiveMap(head, fn), ...recursiveMap(tail, fn)];
  } else {
    return [fn(head), ...recursiveMap(tail, fn)];
  }
}
