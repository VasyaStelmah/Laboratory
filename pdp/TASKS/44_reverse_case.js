//Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

reverseCase = (string) => {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            newString = newString + string[i]
        }
        if (string[i].match(/[A-Z]/)) {
            newString = newString + string[i].toLowerCase()
        }
        if (string[i].match(/[a-z]/)) {
            newString = newString + string[i].toUpperCase()
        }
    }
    return newString;
}
//Examples
console.log(reverseCase("Happy Birthday")) //➞ "hAPPY bIRTHDAY"
console.log(reverseCase("MANY THANKS")) //➞ "many thanks"
console.log(reverseCase("sPoNtAnEoUs")) //➞ "SpOnTaNeOuS"