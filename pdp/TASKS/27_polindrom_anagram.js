// Sub-task - 1
// Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном.
// Description:
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
let aroz = "А роза упала на лапу Азора";
let asya = "Ася, молоко около мяса";
let asy = "Ася, молоко около мса";
let lesh = "Лёша на полке клопа нашёл";

function isPolindrom(string) {
  let newString = "";
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
    if (element === " " || element === "," || element === "-") {
      continue;
    }
    newString = newString + element.toLowerCase();
  }
  if (newString.length % 2 === 1) {
    const average = newString.length / 2;
    for (let i = 0; i < newString.length / 2 - 1; i++) {
      if (newString[i] === newString[average]) {
        continue;
      }
      if (newString[i] === newString[newString.length - i - 1]) {
        console.log(
          `${newString[i]} совпадает ${newString[newString.length - i - 1]} `
        );
      } else {
        console.log(
          `${newString[i]} не совпадает ${newString[newString.length - i - 1]}`
        );
        return `не палиграм`;
      }
    }
  }
  if (newString.length % 2 === 0) {
    for (let i = 0; i < newString.length / 2; i++) {
      if (newString[i] === newString[newString.length - i - 1]) {
        console.log(
          `${newString[i]} совпадает ${newString[newString.length - i - 1]} `
        );
      } else {
        console.log(
          `${newString[i]} не совпадает ${newString[newString.length - i - 1]}`
        );
        return `не палиграм`;
      }
    }
  }
  return "палиграм";
}
console.log(isPolindrom(aroz));
console.log(isPolindrom(asya));
console.log(isPolindrom(asy));
console.log(isPolindrom(lesh));

// Sub-task - 2
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:

// вывод строки "multiples of three" - вместо чисел, кратных 3;
// вывод строки - "multiples of five" - вместо чисел, кратных 5;
// вывод строки - "multiples of three/five" вместо чисел, кратных как 3, так и 5.
function getMultiplesNumbers(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "multiples of three/five";
  }
  if (number % 3 === 0) {
    return "multiples of three";
  }
  if (number % 5 === 0) {
    return "multiples of five";
  }
}
console.log(getMultiplesNumbers(15));
console.log(getMultiplesNumbers(3));
console.log(getMultiplesNumbers(5));

// Sub-task - 3
// Анаграмма - Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.
// Постановка
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
function anagram(str1, str2) {
  if (str1.length === str2.length) {
    for (let i = 0; i < str2.length; i++) {
      console.log(str1.indexOf(str2[i]));
      if (str1.indexOf(str2[i]) === -1) {
        return `false слова не совпадают ${str1} и ${str2}`;
      }
    }
    for (let i = 0; i < str1.length; i++) {
      console.log(str2.indexOf(str1[i]));
      if (str2.indexOf(str1[i]) === -1) {
        return `false слова не совпадают ${str1} и ${str2}`;
      }
    }
    return `true слова совпадают ${str1} и ${str2}`;
  } else {
    return `false слова не совпадают ${str1} и ${str2}`;
  }
}

console.log(anagram("friend", "finder")); //true
console.log(anagram("hello", "bye")); //false
console.log(anagram("hello", "helo")); //false
