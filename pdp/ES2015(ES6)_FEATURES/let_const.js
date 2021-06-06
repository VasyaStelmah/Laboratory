if (true) {
  let b = 42;
}
if (true) {
  var a = 42;
}
// Значение var видно из блока
// Значение let доступно только в блоке
console.log(a, b);

//Нельзя обращаться к переменным let до того как мы их объявили
c = 20;
console.log(c);
let c = 10;

// Если обращаться к переменной let в функции то мы можем получить значение до ее объявления
function hoisted() {
  age = 26;
}
let age;
hoisted();
console.log(age);

// нельзя изменить значение
const COLOR = "ffeebb";
COLOR = "000";
console.log(COLOR);

// но с массивами можно изменять значние
const array = [1, 2, 3, 4, 5];
console.log(array);
array.push(13);
console.log(array);
//И с массивами можно изменить значение
const obj = { a: 42 };
obj.name = "Igor";
