//Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
getAbsSum = (array) => {
    return array.reduce((sum, item) => {
        if (item < 0) {
            item = -item
        }
        return sum + item
    }, 0)
}
//Examples
console.log(getAbsSum([2, -1, 4, 8, 10]))// ➞ 25
console.log(getAbsSum([-3, -4, -10, -2, -3]))// ➞ 22
console.log(getAbsSum([2, 4, 6, 8, 10]))// ➞ 30
console.log(getAbsSum([-1]))// ➞ 1