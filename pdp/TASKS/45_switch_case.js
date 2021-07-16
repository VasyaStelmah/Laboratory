//Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.
flickSwitch = (array) => {
    let flick = true;
    return array.map((item) => {
        if (item === "flick") {
            flick = !flick
        }
        return flick
    })
}
//Examples
console.log(flickSwitch(["edabit", "flick", "eda", "bit"])) //➞ [true, false, false, false]
console.log(flickSwitch(["flick", 11037, 3.14, 53]))// ➞ [false, false, false, false]
console.log(flickSwitch([false, false, "flick", "sheep", "flick"]))// ➞ [true, true, false, false, true]
//Notes
//"flick" will always be given in lowercase.
//An array may contain multiple flicks.
//Switch the boolean value on the same element as the flick itself.