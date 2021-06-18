// Создаёт объект Date с текущей датой и временем
// Создаёт объект Date, значение которого равно количеству миллисекунд (1/1000 секунды), прошедших с 1 января 1970 года GMT+0.
let now = new Date();
// 24 часа после 01.01.1970 GMT+0
let Jan02_1970 = new Date(3600 * 24 * 1000);
console.log(new Date(2011, 0, 1, 0, 0, 0, 0)); // // 1 января 2011, 00:00:00
console.log(new Date(2011, 0, 1)); // то же самое, часы/секунды по умолчанию равны 0
// Для доступа к компонентам даты-времени объекта Date используются следующие методы:
console.log(now.getFullYear())// Получить год (из 4 цифр)
console.log(now.getMonth())// Получить месяц, от 0 до 11.
console.log(now.getDate())// Получить число месяца, от 1 до 31.
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Получить соответствующие компоненты.

// Установка компонентов даты
console.log(Date.now())
let today = new Date;
today.setHours(0);
console.log(today); // сегодня, но час изменён на 0
today.setHours(0, 0, 0, 0);
console.log(today); // сегодня, ровно 00:00:00.