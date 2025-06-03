/* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
*/
class RPNCalculator {
  constructor() {
    this.stack = [];
  }

  push(num) {
    this.stack.push(num);
  }

  popCalculator(func) {
    if (this.stack.length < 2) {
      throw "rpnCalculatorInstance is empty";
    } else {
      const num1 = this.stack.pop();
      const num2 = this.stack.pop();

      this.push(func(num1, num2));
    }
  }

  plus() {
    this.popCalculator((one, two) => two + one);
  }
  value() {
    return this.stack[this.stack.length - 1];
  }

  minus() {
    this.popCalculator((one, two) => two - one);
  }
  times() {
    this.popCalculator((one, two) => two * one);
  }
  divide() {
    this.popCalculator((one, two) => two / one);
  }
}
