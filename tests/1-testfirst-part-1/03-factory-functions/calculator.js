// /* eslint-disable no-unused-vars */
// function createCalculator() {
//   let total = 0;

//   return {
//     add(num) {
//       total += num;
//     },
//     subtract(num) {
//       total -= num;
//     },
//     value() {
//       return total;
//     },
//     clear() {
//       total = 0;
//     },
//   };
// }

// function addSquareMethod(calculators) {
//   return calculators.map((calculator) => {
//     calculator.square = function () {
//       return this.value() ** 2;
//     };
//     return calculator;
//   });
// }

// const humanCalculatorMethods = {
//   add(num) {
//     this.total += num;
//   },
//   subtract(num) {
//     this.total -= num;
//   },
//   value() {
//     return this.total;
//   },
//   clear() {
//     this.total = -10;
//   },
// };

// function createHumanCalculator() {
//   const instance = Object.create(humanCalculatorMethods);
//   instance.total = -10;
//   return instance;
// }

function createCalculator() {
  let total = 0;

  return {
    add(num) {
      total += num;
    },
    subtract(num) {
      total -= num;
    },
    value() {
      return total;
    },
    clear() {
      total = 0;
    },
  };
  return total;
}

function addSquareMethod(instances) {
  return instances.map((instance) => {
    instance.square = function () {
      return this.value() ** 2;
    };
    return instance;
  });
}

const humanCalculatorMethods = {
  add(num) {
    this.total += num;
  },
  subtract(num) {
    this.total -= num;
  },
  value() {
    return this.total;
  },
  clear() {
    this.total = -10;
  },
};
function createHumanCalculator() {
  const instance = Object.create(humanCalculatorMethods);
  instance.total = -10;
  return instance;
}
