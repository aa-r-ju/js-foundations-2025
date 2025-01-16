/* eslint-disable no-unused-vars, no-prototype-builtins */
// Part 1: Using `hasOwnProperty`
function findObjPropsHasOwn(obj) {
  const keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys.join(", ");
}

// Part 2: Using `Object.keys`
function findObjKeys(obj) {
  return Object.keys(obj).join(", ");
}

const rectanglePrototype = {
  getArea: function () {
    return this.height * this.width;
  },
};

// function rectangle(color, height, width) {
//   const rectangleInstance = Object.create(rectanglePrototype);

//   rectangleInstance.color = color;
//   rectangleInstance.height = height;
//   rectangleInstance.width = width;

//   return rectangleInstance;
// }

// // Test case 1: findObjPropsHasOwn
// const blueRectangle = rectangle("blue", 5, 3);
// console.log(findObjPropsHasOwn(blueRectangle)); // Output: "color, height, width"

// // Test case 2: findObjKeys
// const purpleRectangle = rectangle("purple", 7, 2);
// console.log(findObjKeys(purpleRectangle)); // Output: "color, height, width"
