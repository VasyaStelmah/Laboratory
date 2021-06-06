// В JavaScript есть 8 основных типов.
// number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
// bigint для целых чисел произвольной длины.
// string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
// boolean для true/false.
// null для неизвестных значений – отдельный тип, имеющий одно значение null.
// undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
// object для более сложных структур данных.
// symbol для уникальных идентификаторов.

// Number
let n = 123;

/*-------STRING---------*/

let str1 = "Hello World";
let str2 = "Hello World";
let personName = "Viktor";
let personName2 = "Pavel";
let personName3 = "Vasya";
let message = 'Person name is "' + personName + '"';
let message2 = "Person name is '" + personName2 + "'";
let message3 = "Person name is '" + personName3 + "'";

console.log(message);
console.log(message2);
console.log(message3);
console.log(message2.length); //свойство возращает количество символов в данной строке
console.log(message2.toUpperCase()); //перевести все символы в строке в верхний регистр
console.log(message2.toLowerCase()); //перевести все символы в строке в нижний регистр
console.log(message2.charAt(4)); //метод определяющий какой выбранный символ находится на выбранной позиции
console.log(message2.indexOf("name")); //находит введенное значеие в строке и выводит его позиции т.е. на каком месте находится
//1 параметр- это позиция с которой нужно начинать
//2 парметр- это сколько символов мы хотим забрать
console.log(message2.substr(1, 5));

/*-------------NUMBER--------------*/
console.log(2e3); //2 умножить 3 раза на 10
console.log(NaN); //not a number
console.log(typeof NaN); //number
console.log(123 / 0); //NaN
console.log((8 / 3).toFixed(3)); //3 цифры после запятой с округлением
console.log(parseFloat(8 / 3).toFixed(3)); //Перевести строку в число с точкой
console.log(isNaN(NaN)); //проверяет валидное ли число и можно ли с ним работать
console.log(isNaN(45));
console.log(isFinite(1 / 0)); // false - число не валидное, проверяет число на бесконечность
console.log(isFinite(9999999)); //true

/*-------------------ARRAY--------------------*/
let cars = ["Ford", "Mazda", "Kia", "BMW"];
let any = [
  42,
  "Apple",
  {
    a: 1,
  },
];
console.log(cars);
console.log(any);

cars.push("Audi"); //Добавит в конец массива новое значение
console.log(cars);
cars.pop(); //удалит с конца одно значение
console.log(cars);
cars.shift(); //удалит сначала одно значение
console.log(cars);
cars.unshift("Toyota"); //Добавит вначале
console.log(cars);

/*--------------------OBJECT-------------*/
//сначала его ключ, а потом его значение
//Внутри объекта могут быть объекты
let person = {
  name: "Vasya",
  year: 1990,
  family: ["Elena", "Igor"],
  car: {
    year: 2010,
    model: "Ford",
  },
  calculateAge: function () {
    let age = 2018 - this.year; //this=person.year получить доступ для расчета года из этого объекта
    console.log("Age is ", age);
  },
};
console.log(person);

//
console.log(person.name);
// console.log(person['year'])
console.log(person.car.year);
let field = "car";
console.log(person[field].year);
//изменяем значение person.year
person.year = 1993;
//считаем возраст после изменения
person.calculateAge();
/*------Методы массивов ----------*/
let str = "1,2,3,4,5,6,7,8";

let array = str.split(","); //строку переводит в массив, 2 значение это сепеаратор который будет разделять значения

alert(array);
// console.log(typeof array)
// console.log(array)
// console.log(typeof array.join(';'))    //соединить массив в строку методом join, 2 значение будет разделять цифры
// console.log(array.join(';'))

// console.log(array.reverse())    //полностью поменять на обратный порядок

array.splice(1, 1, "12"); //удаляет начиная со 2 элемента , 2 значение количество элементов, 3 значение добавление введенного элемента вместо удаленного
let newArray = array.concat([1, 2]); //добавление в массив array, нового значения newArray --1,2
// console.log(newArray)

let objArr = [
  {
    name: "Max",
    age: 27,
  },
  {
    name: "Elena",
    age: 18,
  },
  {
    name: "Victor",
    age: 20,
  },
];
//FIND выводит все элементы массива, проходит как цикл
//Или один объект.
let foundPerson = objArr.find(function (person) {
  console.log(person);
  return person.age === 20;
});
console.log(foundPerson);

//FILTER метод фильтрует значения в массиве
let oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (i) {
  return i % 2 === 0; //возвращает все четные числа из массива
});
// console.log(objArr)

//MAP метод превращает в массиве из текста в строки
let numArray = array.map(function (i) {
  // return parseInt(i)//Распарсит в массиве текст в числа
  return i * 2; //каждый элемент массива умножит на 2
});

/*---Объекты Math---------------*/

// let num = 2.4;

// console.log(Math.random()); //выводит рандомное число
// console.log(Math.floor(num));    //округляет в меньшую
// console.log(Math.ceil(num)); ////округляет в большую

// /*-----Объект JSON  -------*/
// //как работать с объектами и переводить их к строкам

let person = {
  name: "Max",
  age: 26,
  car: {
    model: "Ford",
  },
  job: "Frontend",
  friends: ["Elena", "Igor"],
};

let str = JSON.stringify(person); //переводит объект в строку
console.log(str);
// console.log(JSON.parse(str));
console.log(str.name);
