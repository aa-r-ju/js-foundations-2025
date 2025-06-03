/* eslint-disable no-unused-vars, no-prototype-builtins */
function findObjPropsHasOwn(obj) {
  let keys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }

  return keys.join(", ");
}
