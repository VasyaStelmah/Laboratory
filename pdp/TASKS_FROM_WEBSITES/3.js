//Дан массив. Запишите первый элемент этого массива в переменную elem1, второй - в переменную elem2, третий - в переменную elem3, а все остальные элементы массива - в переменную arr. Скрыть решение.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let [elem1, elem2, ...newArr] = arr;
console.log(elem1)
console.log(elem2)
console.log(newArr)