//Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
filterArray = (array) => array.filter(item => typeof item === 'number')
//Examples
console.log(filterArray([1, 2, "a", "b"])) //➞ [1, 2]
console.log(filterArray([1, "a", "b", 0, 15]))// ➞ [1, 0, 15]