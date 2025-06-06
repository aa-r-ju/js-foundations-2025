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

function powerLevelAverage(superheroes) {
  if (superheroes.length === 0) return 0;
  const total = superheroes.reduce((sum, hero) => sum + hero.powerLevel, 0);
  return Math.round(total / superheroes.length);
}

function mapReduce(arr, callback) {
  return arr.reduce((result, val, index, array) => {
    result.push(callback(val, index, array));
    return result;
  }, []);
}

function filterReduce(arr, callback) {
  return arr.reduce((result, val, index, array) => {
    if (callback(val, index, array)) {
      result.push(val);
    }
    return result;
  }, []);
}

function inYourBudget(maxPrice, items) {
  return items
    .filter((item) => item.price <= maxPrice)
    .map((item) => item.item);
}

function separateAndReturnNames(arr, nameType, maxLength) {
  arr.map((hero) => {
    const [firstName, lastName] = hero.name.split(" ");
    hero.firstName = firstName;
    hero.lastName = lastName;
    return hero;
  });

  return arr
    .map((hero) => hero[nameType])
    .filter((name) => name.length <= maxLength);
}

function priorityTodoDuration(todoList) {
  return todoList
    .filter((task) => task.priority === "high")
    .reduce((total, task) => total + task.duration, 0);
}
