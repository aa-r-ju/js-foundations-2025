/* eslint-disable no-unused-vars */
const humanCalculatorProto = {
  value() {
    return this.total;
  },
  add(num) {
    this.total += num;
  },
  subtract(num) {
    this.total -= num;
  },
  clear() {
    this.total = -10;
  },
};

function createHumanCalculator() {
  const humanCalculator = Object.create(humanCalculatorProto);
  humanCalculator.total = -10;
  return humanCalculator;
}

function createCalculator() {
  let total = 0;
  return {
    value() {
      return total;
    },
    add(num) {
      return (total += num);
    },
    subtract(num) {
      return (total -= num);
    },
    clear(num) {
      return (total = 0);
    },
  };
}

function addSquareMethod(instances) {
  return instances.map((instance) => {
    instance.square = function () {
      return this.value() ** 2;
    };
    return instance;
  });

  const humanCalculatorProto = {
    value() {
      return this.total;
    },
    add(num) {
      return (this.total += num);
    },
    subtract(num) {
      return (this.total -= num);
    },
    clear() {
      return (this.total = -10);
    },
  };
}

function createHumanCalculator() {
  const humanCalculator = Object.create(humanCalculatorProto);
  humanCalculator.total = -10;
  return humanCalculator;
}
