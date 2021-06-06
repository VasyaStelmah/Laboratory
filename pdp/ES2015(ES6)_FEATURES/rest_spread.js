// Rest
function average(arr) {
  return arr.reduce((acc, i) => (acc += i), 0) / arr.length;
}
console.log(average([10, 20, 30, 40]));

function average(a, ...args) {
  return args.reduce((acc, i) => (acc += i), 0) / args.length;
}
console.log(average(10, 20, 30, 40));

// spread
const array = [1, 2, 3, 5, 8, 13];
// массив
console.log(array);
// элементы которое развернуты из массива
console.log(...array);
// раньше делали через apply чтобы произвести выисление
console.log(Math.max.apply(null, array));
// можно клонировать знчения и добавлять новые
const fib = [1, ...array];
console.log(fib);

// Destructuring
const arrayDest = [1, 2, 3, 5, 8, 13];
const ab = arrayDest[0];
console.log(ab);
const [a, b] = arrayDest;
console.log(a, b);

// object

const address = {
  country: "Russia",
  city: "Moskow",
  street: "Lenina",
  concat: function () {
    return `${this.country}, ${this.city}, ${this.street}`;
  },
};
console.log(address.concat());
// destructuring object
const { city, country, street = "Freedom", concat } = address;
console.log(city);
console.log(street);
console.log(concat.call(address));
// получить копию другого объекта
const newAddress = { ...address, population: 10000 };
console.log(newAddress);
