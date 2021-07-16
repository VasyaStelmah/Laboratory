//Дан массив с числами. Узнайте сколько элементов 
// c начала массива надо сложить, чтобы в сумме 
// получилось больше 10-ти.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// -----Version 1
howManyElementsUpToTen1 = (arr) => {
	let indexElementUpToTen = 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (sum >= 10) {
			indexElementUpToTen = i
			break
		}
		sum = sum + arr[i]
	}
	return indexElementUpToTen;
}
console.log(howManyElementsUpToTen1(arr));

