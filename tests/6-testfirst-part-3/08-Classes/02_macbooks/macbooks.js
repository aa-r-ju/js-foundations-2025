/* eslint-disable no-unused-vars */
// Laptop class definition
class Laptop {
  constructor(year, hd) {
    this.year = year;
    this.hd = hd;
  }

  // Prototype method to check specifications
  checkSpecs() {
    return `Year: ${this.year}, HD: ${this.hd}`;
  }
}

// Macbook class definition, extends Laptop
class Macbook extends Laptop {
  constructor(year, hd, color) {
    super(year, hd); // Call the parent class constructor
    this.color = color;
  }
}
