//Дан массив. Запишите последний элемент этого массива в переменную elem1, а предпоследний - в переменную elem2.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.reverse()
let [elem1, elem2, ...newArray] = arr;
console.log(newArray)
console.log(elem1)
console.log(elem2)