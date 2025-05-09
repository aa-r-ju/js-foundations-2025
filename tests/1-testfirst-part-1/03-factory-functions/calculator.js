// /* eslint-disable no-unused-vars */

// ===============================
// Basic Calculator using Factory
// ===============================
function createCalculator() {
  let total = 0;

  return {
    value() {
      return total;
    },
    add(num) {
      total += num;
    },
    subtract(num) {
      total -= num;
    },
    clear() {
      total = 0;
    },
  };
}

// ====================================
// Add square method to calculator list
// ====================================
function addSquareMethod(instances) {
  return instances.map((instance) => {
    instance.square = function () {
      return this.value() ** 2;
    };
    return instance;
  });
}

// ======================================
// Human Calculator using Object.create()
// ======================================
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
