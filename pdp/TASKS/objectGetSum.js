// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples;
console.log(
  getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
); // ➞ 65700
console.log(
  getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ])
); // ➞ 62600
function getBudgets(array) {
  let result = array.reduce(function (sum, current) {
    return sum + current.budget;
  }, 0);
  return result;
}
