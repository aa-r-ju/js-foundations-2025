/* eslint-disable no-unused-vars */
function runNumTimes(func, num) {
    for (let i = 0; i < num; i++) {
      func();
    }
  }
  let myString = '';

  runNumTimes(() => {
    myString += 'hello';
  }, 3);
  
  console.log(myString); // Output: "hellohellohello"
  let myArray = [];
  let count = 1;
  
  runNumTimes(() => {
    myArray.push(count);
    count++;
  }, 5);
  
  console.log(myArray); // Output: [1, 2, 3, 4, 5]
  let total = 0;

  runNumTimes(() => {
    total += 5;
  }, 5);
  
  console.log(total); // Output: 25
        