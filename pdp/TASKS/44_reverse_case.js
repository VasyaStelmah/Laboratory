//Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
reverseCase = (string) => {
    const newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/[A-Z]/)) {
            let lowerCase = string[i].toLowerCase();
            console.log(lowerCase);
            newString.concat(lowerCase);
        }
        if (string[i].match(/[a-z]/)) {
            let upperCase = string[i].toUpperCase();
            console.log(upperCase);
            newString.concat(upperCase);
        }
    }
    return newString;
}
//Examples
console.log(reverseCase("Happy Birthday")) //➞ "hAPPY bIRTHDAY"
console.log(reverseCase("MANY THANKS")) //➞ "many thanks"
console.log(reverseCase("sPoNtAnEoUs")) //➞ "SpOnTaNeOuS"
console.log("".concat('fdfdfdf'))