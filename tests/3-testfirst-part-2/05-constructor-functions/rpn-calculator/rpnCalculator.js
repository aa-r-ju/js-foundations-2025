// /* eslint-disable no-unused-vars, no-throw-literal*/
// class RPNCalculator {
//   constructor() {
//     this.stack = [];
//   }

//   push(value) {
//     this.stack.push(value);
//   }

//   value() {
//     if (this.stack.length === 0) throw "rpnCalculatorInstance is empty";
//     return this.stack[this.stack.length - 1];
//   }

//   plus() {
//     this.checkStack(2);
//     const b = this.stack.pop();
//     const a = this.stack.pop();
//     this.stack.push(a + b);
//   }

//   minus() {
//     this.checkStack(2);
//     const b = this.stack.pop();
//     const a = this.stack.pop();
//     this.stack.push(a - b);
//   }

//   times() {
//     this.checkStack(2);
//     const b = this.stack.pop();
//     const a = this.stack.pop();
//     this.stack.push(a * b);
//   }

//   divide() {
//     this.checkStack(2);
//     const b = this.stack.pop();
//     const a = this.stack.pop();
//     if (b === 0) throw "Division by zero";
//     this.stack.push(a / b);
//   }

//   checkStack(required) {
//     if (this.stack.length < required) {
//       throw "rpnCalculatorInstance is empty";
//     }
//   }
// }

// const calculator = new RPNCalculator();

// // Push values onto the stack
// calculator.push(5);
// calculator.push(3);
// // calculator.plus(); // Adds 5 + 3
// console.log("Result after addition:", calculator.value()); // Outputs: 8
// console.log(calculator);

class RPNCalculator {
  constructor() {
    this.stack = [];
  }

  push(num) {
    this.stack.push(num);
  }

  plus() {
    if (this.stack.length < 2) {
      throw "rpnCalculatorInstance is empty";
    }
    const num2 = this.stack.pop();
    const num1 = this.stack.pop();
    this.stack.push(num1 + num2);
  }

  minus() {
    if (this.stack.length < 2) {
      throw "rpnCalculatorInstance is empty";
    }
    const num2 = this.stack.pop();
    const num1 = this.stack.pop();
    this.stack.push(num1 - num2);
  }

  times() {
    if (this.stack.length < 2) {
      throw "rpnCalculatorInstance is empty";
    }
    const num2 = this.stack.pop();
    const num1 = this.stack.pop();
    this.stack.push(num1 * num2);
  }

  divide() {
    if (this.stack.length < 2) {
      throw "rpnCalculatorInstance is empty";
    }
    const num2 = this.stack.pop();
    const num1 = this.stack.pop();
    this.stack.push(num1 / num2);
  }

  value() {
    return this.stack[this.stack.length - 1];
  }
}
