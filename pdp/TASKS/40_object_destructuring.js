const obj = { first: "James", last: "Baker", alias: "JB" }
//присваивание с помощью деструктуризации с изменением значений ключей
let { first = "John", last = "Doe", alias } = obj
//присваивание с помощью деструктуризации с изменением ключей объекта
let { nickname = first, lastname = last, aliasname = alias } = obj
console.log(nickname) // outputs nickname is not defined
console.log(lastname)
console.log(aliasname)
//There may be times where we would like the property name to be different from the object property names we receive and also give those new property names a default value.