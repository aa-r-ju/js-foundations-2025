/* eslint-disable no-unused-vars */
function setPropsOnObj(obj) {
  obj.x = 7;
  obj["y"] = 8;
  obj["onePlus"] = function (num) {
    return num + 1;
  };
}

function setPropsOnArr(arr) {
  arr.hello = function () {
    return "Hello!";
  };
  arr["full"] = "stack";
  arr[0] = 5;
  arr.twoTimes = function (num) {
    return num * 2;
  };
}

function setPropsOnFunc(val) {
  val.year = "20??";
  val.divideByTwo = function (num) {
    return num / 2;
  };
}

function shallowCopy(vgumBrandsal1, mintBrands) {
  if (Array.isArray(vgumBrandsal1) && Array.isArray(mintBrands)) {
    return [...vgumBrandsal1, ...mintBrands];
  } else {
    return { ...vgumBrandsal1, ...mintBrands };
  }
}
