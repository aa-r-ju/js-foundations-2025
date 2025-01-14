/* eslint-disable no-unused-vars */
// Mammal class definition
class Mammal {
  constructor(name) {
    this.name = name;
    this.offspring = [];
  }

  // Prototype method to greet
  sayHello() {
    return `My name is ${this.name}, I'm a ${this.constructor.name}`;
  }

  // Prototype method to add a baby
  haveBaby() {
    const baby = new this.constructor(`Baby ${this.name}`);
    this.offspring.push(baby);
    return baby;
  }
}

// Cat class definition, extends Mammal
class Cat extends Mammal {
  constructor(name, color) {
    super(name); // Call the parent class constructor
    this.color = color;
  }

  // Prototype method specific to Cat
  meow() {
    return "meow";
  }

  // Overridden method to add a baby with a specific color
  haveBaby(color) {
    const baby = new Cat(`Baby ${this.name}`, color);
    this.offspring.push(baby);
    return baby;
  }
}

// Dog class definition, extends Mammal
class Dog extends Mammal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  // Prototype method specific to Dog
  bark() {
    return "RUFF RUFF";
  }

  // Overridden method to add a baby with a specific breed
  haveBaby(breed) {
    const baby = new Dog(`Baby ${this.name}`, breed);
    this.offspring.push(baby);
    return baby;
  }
}
