
//Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.
flickSwitch = (array) => {
    let newArray = []
    let flick = true;
    for (let i = 0; i < array.length; i++) {
        console.log(array.length)
        if (array[i] === "flick") {
            flick = !flick
            newArray.push(flick)
        }
        newArray.push(flick)
        console.log(flick, i)
    }
    return newArray
}
//Examples
console.log(flickSwitch(["edabit", "flick", "eda", "bit"])) //➞ [true, false, false, false]
console.log(flickSwitch(["flick", 11037, 3.14, 53]))// ➞ [false, false, false, false]
console.log(flickSwitch([false, false, "flick", "sheep", "flick"]))// ➞ [true, true, false, false, true]
//Notes
//"flick" will always be given in lowercase.
//An array may contain multiple flicks.
//Switch the boolean value on the same element as the flick itself.