/* eslint-disable no-unused-vars */
function indexAndValue(arr) {
  return arr.map((value, index) => ({ index, value }));
}

function capitalize(val) {
  return val.toUpperCase();
}

function swapCase(str) {
  return str
    .split(" ")
    .map((word, index) => (index % 2 === 0 ? capitalize(word) : word))
    .join(" ");
}

function extensionSearch(extension, files) {
  return files.filter((file) => file.endsWith(`.${extension}`));
}

function getPopulation(countries, names) {
  return countries.reduce((sum, country) => {
    if (names.length === 0 || names.includes(country.name)) {
      return sum + country.population;
    }
    return sum;
  }, 0);
}

function keyifyArrayOfObjects(key, arr) {
  return arr.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
}
