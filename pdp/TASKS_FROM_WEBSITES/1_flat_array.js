//Дан трехмерный массив с числами, например 
// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
// Найдите сумму элементов этого массива. 
// Массив, конечно же, может быть произвольным
const array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
// -----Version 1
sumElements1 = (array) => {
	return array.reduce((prevItem, item, index, array) => {
		return prevItem + item.reduce((prevItem, item, index, array) => {
			return prevItem + item.reduce((prevItem, item, index, array) => {
				return prevItem + item
			}, 0)
		}, 0)
	}, 0)
}
// -----Version 2
sumElements2 = (array) => {
	return array.flat().flat().reduce((acc, item) => acc + item, 0)
}
console.log(sumElements1(array))
console.log(sumElements2(array))