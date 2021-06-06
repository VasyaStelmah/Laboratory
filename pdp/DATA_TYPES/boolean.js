// Если значение опущено или равно 0, -0, null, false, NaN, undefined или пустой строке (""), объект имеет начальное значение, равное false.
//false
console.log(new Boolean(0))//false
console.log(new Boolean(-0))//false
console.log(new Boolean(null))//false
console.log(new Boolean(false))//false
console.log(new Boolean(NaN))//false
console.log(new Boolean(undefined))//false
console.log(new Boolean(''))//false
// true
console.log(new Boolean([]))// true
console.log(new Boolean({}))// true
console.log(new Boolean(Symbol('')))// true
console.log(new Boolean(function name(params) {
    return
}))// true
