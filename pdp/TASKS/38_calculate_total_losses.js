//You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".
stolenItem = (object) => {
    console.log(Object.values(object))
    if (Object.keys(object).length === 0) {
        return "Lucky you!"
    }
    return Object.values(object).reduce((accumulator, currentValue) => accumulator + currentValue)
}
//Examples
console.log(stolenItem({
    tv: 30,
    skate: 20,
    stereo: 50,
}))//➞ 100
console.log(stolenItem({
    painting: 20000,
}))//➞ 20000
console.log(stolenItem({}))//➞ "Lucky you!"