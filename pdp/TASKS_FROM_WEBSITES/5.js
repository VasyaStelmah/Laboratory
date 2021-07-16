//Дан массив. Запишите второй элемент этого массива в переменную elem2. Первый элемент никуда записывать не надо
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let [, elem2, ...newArray] = arr;
console.log(newArray);
console.log(elem2);