//Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
freeShipping = (object) => {
    if (Object.values(object).reduce((sum, item) => {
        return sum + item
    }, 0) > 50) {
        return true
    } else {
        return false
    }
}
//Examples
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }))// ➞ false
console.log(freeShipping({ "Flatscreen TV": 399.99 }))// ➞ true
console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 })) //➞ true