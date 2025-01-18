/* eslint-disable no-unused-vars */
// Reject Function
const reject = function (arr, func) {
  return arr.filter((item) => !func(item));
};

// Test Functions
const testWord = (word) => word.length > 3;

const isNegNum = (num) => num < 0;
const greaterThanThree = (word) => word.length > 3;

// Example Usage
const listOfWords = reject(
  ["one", "two", "three", "four", "five", "six", "seven", "eight"],
  testWord
);
console.log(listOfWords); // ['one', 'two', 'six']

let arrayOfNumbers = [4, -57, 1778, -43, 9, 89, -345];
let positiveNumsOnly = reject(arrayOfNumbers, isNegNum);
console.log(positiveNumsOnly); // [4, 1778, 9, 89]

let arrayOfWords = [
  "testing",
  "bye",
  "fly",
  "hello",
  "too",
  "zoo",
  "pie",
  "function",
];

let wordsLessThanThree = reject(arrayOfWords, greaterThanThree);
console.log(wordsLessThanThree); // ['bye', 'fly', 'too', 'zoo', 'pie']

// Jasmine Testing
describe("reject function", () => {
  it("returns the values in the array that returned 'false' after the function argument is invoked", () => {
    let arrayOfNumbers = [4, -57, 1778, -43, 9, 89, -345];
    let isNegNum = (num) => {
      return num < 0;
    };

    let positiveNumsOnly = reject(arrayOfNumbers, isNegNum);
    expect(positiveNumsOnly).toEqual([4, 1778, 9, 89]);
  });

  it("returns the words in the array that returned `false` after the function argument is invoked", () => {
    let arrayOfWords = [
      "testing",
      "bye",
      "fly",
      "hello",
      "too",
      "zoo",
      "pie",
      "function",
    ];

    let greaterThanThree = (word) => {
      return word.length > 3;
    };

    let wordsLessThanThree = reject(arrayOfWords, greaterThanThree);
    expect(wordsLessThanThree).toEqual(["bye", "fly", "too", "zoo", "pie"]);
  });

  it("checks that `isNegNum` and `greaterThanThree` are called when passed to `reject` function", () => {
    window.isNegNum = (num) => {
      return num < 0;
    };
    window.greaterThanThree = (word) => {
      return word.length > 3;
    };
    spyOn(window, "isNegNum").and.callThrough();
    spyOn(window, "greaterThanThree").and.callThrough();

    reject([-4, 5, 10], isNegNum);
    reject(["one", "three", "five", "three"], greaterThanThree);

    expect(window.isNegNum).toHaveBeenCalled();
    expect(window.greaterThanThree).toHaveBeenCalled();
  });
});
