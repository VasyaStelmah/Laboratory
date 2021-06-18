// Regular Expressions
// .--Любой одиночный символ
// ..--Любых два символа
// []--Любой из них
// [Ii]--найти любой символ I или i
// [Ii]t--найти любой символ начинающиеся на I или i и второй символ t
// [a-d].--найти первый символ в диапазоне от a до d  и второй символ будет любым
// [0-9].[0-9]--найти первый символ число от 0 до 9 второй любой третий от 0 до 9
// $--конец строки
// .$--найти любой символ в конце строк
// \--обратный слеш экранирование, можно искать точки и спец символы
// \.$--поиск символа точки в конце строк
// ^--начало строки
// ^[^b]--найти символ начинающиеся в строке не с b
// \d--любая цифра
// \d\d--две любых цифры
// \D--все что угодно кроме цифр
// \s--поиск любого пробела
// en\s--первый e второй n и следующий пробел(поиск в конце слова)
// \S--все кроме пробела
// \w--буква
// \W--все кроме буквы
// b\--граница слова
// \b\w\w\w\b--слово из трех любых букв
// \B--все кроме границ
// КВАНТИФИКАЦИЯ
// {4}--количесво повторений
// \b\w{3}\b--искать слово из трех букв
// *--от нуля и выше
// be*--первый символ b и последующие e в любом количестве
// +--от одного и выше
// ?--нуль или 1 раз

let wordBeginK =
  "Thomas Auto Charles Kevinou Retail Matthew Technology Donald Andrew Auto Kevin Technology Edward";

console.log("Kevin" === wordBeginK.match(/\bKevin\b/)[0]);

let string = "I love JavaScript";
let resultJavascript = string.match(/Java(Script)/);
console.log(result[0]); // JavaScript (всё совпадение)
console.log(result[1]); // Script (первые скобки)
console.log(result.length); // 2

// Дополнительная информация:
console.log(result.index); // 7 (позиция совпадения)
console.log(result.input); // I love JavaScript (исходная строка)