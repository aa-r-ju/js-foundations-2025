/* eslint-disable no-unused-vars */
function setPropsOnObj(obj) {
  obj.x = 7;
  obj["y"] = 8;
  obj.onePlus = (num) => num + 1;
}

function setPropsOnArr(arr) {
  arr.hello = () => "Hello!";
  arr.full = "stack";
  arr[0] = 5;
  arr.twoTimes = (num) => num * 2;
}

function setPropsOnFunc(func) {
  func.year = "20??";
  func.divideByTwo = (num) => num / 2;
}

function shallowCopy(item1, item2) {
  if (Array.isArray(item1) && Array.isArray(item2)) {
    return [...item1, ...item2];
  } else if (typeof item1 === "object" && typeof item2 === "object") {
    return { ...item1, ...item2 };
  }
  return null;
}
