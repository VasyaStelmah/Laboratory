//============== Array [ Intersection A and B of arrays]

{
	const arrA = [7, 1, 77, 0, 4, 3, 2];
	const arrB = [13, 5, 2, 6, 7, 1];
	const newArray = [];
	arrA.forEach(function (itemA) {
		arrB.forEach(function (itemB) {
			if (itemA === itemB) {
				newArray.push(itemA);
			}
		});
	});
	console.log(newArray); // returns [7, 1, 2]
}
const getIntersection2 = (arrA, arrB) =>
	arrA.filter((e) => arrB.find((el) => e === el));
{
	const arrA = [7, 1, 77, 0, 4, 3, 2];
	const arrB = [13, 5, 2, 6, 7, 1];
	let tempoArr = [];
	arrA.forEach((itemA) => arrB.includes(itemA) && tempoArr.push(itemA));

	console.log(tempoArr);
}

{
	const arrA = [7, 1, 77, 0, 4, 3, 2];
	const arrB = [13, 5, 2, 6, 7, 1];

	let tempoArr = [];
	let fn = (itemA) => (itemB) => itemA === itemB;

	for (let i = 0; i < arrA.length; i++) {
		let itemRes = arrB.find(fn(arrA[i]));
		typeof itemRes !== "undefined" && tempoArr.push(itemRes);
	}

	console.log(tempoArr);
}

{
	const arrA = [7, 1, 77, 0, 4, 3, 2];
	const arrB = [13, 5, 2, 6, 7, 1];

	let res = arrA.filter((item) => arrB.includes(item));

	console.log(res);
}

// ============
{
	const persons = [
		{ id: 1, name: "Karl", age: 24, group: "editor" },
		{ id: 2, name: "Poul", age: 32, group: "admin" },
		{ id: 3, name: "John", age: 42, group: "editor" },
		{ id: 4, name: "Mark", age: 26, group: "admin" },
	];
	// const findAdminAr = (arr) => {
	// let result = [];
	// arr.forEach((obj) => {
	//   if (obj.group === "admin" && obj.name.includes("ar")) {
	//     result.push(obj.name);
	//   }
	// });
	// let result;
	// if (arr.length > 0) {
	//   result = arr.filter((e) => e.group === "admin" && e.name.includes("ar"));
	// }
	// return result;

	const findAdminAr = (arr) =>
		[...arr]?.find(
			(item) => item.group === "admin" && item.name.includes("ar")
		) || {};

	console.info("#17 test persons", findAdminAr(persons));
}

{
	const funFlat = (arr) => arr.flat();
	// v. 2
	const funFlat2 = (arr) => {
		return [].concat(...arr);
	};
	// v. 3
	const funFlat3 = (arr) =>
		arr.reduce((prev, current) => prev.concat(current), []);

	const funFlat4 = (arr) => arr.reduce((acc, item) => [...acc, ...item], []);

	// arr.reduce((acc, item) => (item ? [...acc, ...item] : [...acc]), []);

	const nested = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	];
	console.info("#18 test funFlat", [
		funFlat(nested),
		funFlat2(nested),
		funFlat3(nested),
		funFlat4(nested),
	]);
}

// ============

// t1.split("") === [t1]

{
	function fn(a, b) {
		return (function fn(c, d) {
			return (function fn(c, d) {
				return (function fn(c, d) {
					return (function fn(c, d) {
						return (function fn(c, d) {
							return (function fn(c, d) {
								return (function fn(c, d) {
									return c + d;
								})(a, b);
							})(a, b);
						})(a, b);
					})(a, b);
				})(a, b);
			})(a, b);
		})(a, b);
	}

	let fn2 = (a, b) => ((c, d) => c + d)(a, b);

	let res = fn(5, 4);

	console.log(res);
}

{
	let a = "ШАЛАш ШАЛАш ШАЛАш";

	let a2 = a.toLowerCase();

	let b = (a) => a.split("").reverse().join("");

	let res = a2 === b(a2);

	console.log({ res, b: b(a2), a2 });
}

//-----------------------------

{
	const companies = [
		{ name: "Company One", category: "Finance", start: 1981, end: 2004 },
		{ name: "Company Two", category: "Retail", start: 1992, end: 2008 },
		{ name: "Company Three", category: "Auto", start: 2000, end: 2007 },
		{ name: "Company Four", category: "Retail", start: 1989, end: 2010 },
		{ name: "Company Five", category: "Technology", start: 2009, end: 2014 },
		{ name: "Company Six", category: "Finance", start: 1987, end: 2010 },
		{ name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
		{ name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
		{ name: "Company Nine", category: "Retail", start: 1970, end: 1989 },
	];

	const members = [
		{ name: "James", speciality: "Finance" },
		{ name: "Richard", speciality: "Retail" },
		{ name: "Thomas", speciality: "Auto" },
		{ name: "Charles", speciality: "Retail" },
		{ name: "Matthew", speciality: "Technology" },
		{ name: "Donald", speciality: "Finance" },
		{ name: "Andrew", speciality: "Auto" },
		{ name: "Kevin", speciality: "Technology" },
		{ name: "Edward", speciality: "Retail" },
	];

	const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

	// * for i *
	// Перебрать массив companies, в консоли вывести самую старшую компанию
	let min = companies[0].start;
	let minIndex = 0;
	for (let i = 1; i < companies.length; i++) {
		if (companies[i].start < min) {
			min = companies[i].start;
			minIndex = i;
		}
	}
	console.log("oldest company:", companies[minIndex].name);
}

//============== Array [Flattening an array of arrays]
{
	const nested = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	];
	const newArray = [];
	nested.forEach(function (item) {
		item.forEach(function (itemItem) {
			newArray.push(itemItem);
		});
	});
	console.log(newArray); // flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
//============== Array [ A simple search (case-sensitive)]
{
	const persons = [
		{ id: 1, name: "Karl", age: 24, group: "editor" },
		{ id: 2, name: "Poul", age: 32, group: "admin" },
		{ id: 3, name: "John", age: 42, group: "editor" },
		{ id: 4, name: "Mark", age: 25, group: "admin" },
	];
	// Написать функцию -
	// Которая возвращает массив из сотрудников из группы 'admin' у которых в имени встречаются сочетания букв - 'ar'
	const newArray = [];
	search = (groupName, array, searchWord) => {
		array.forEach(function (item) {
			if (item.group === groupName) {
				if (item.name.includes(searchWord)) {
					newArray.push(item);
				}
			}
		});
		return newArray;
	};
	console.log(search("admin", persons, "ar"));
}
//============== Array [Remove duplicates from an array of numbers/strings]
{
	const values = [3, 1, 3, 5, 2, 4, 4, 4];
	const uniqueArray = []; // uniqueValues is [3, 1, 5, 2, 4]
	unique = (array, uniqueArray) => {
		array.forEach(function (item) {
			if (!uniqueArray.includes(item)) {
				uniqueArray.push(item);
			}
		});
		return uniqueArray;
	};
	console.log(unique(values, uniqueArray));
}
//==============Array [Find the Index]
{
	//Create a function that takes an array and a string as arguments and return the index of the string.
	findIndex = (array, searchWord) => {
		array.forEach(function (item, index) {
			if (item === searchWord) {
				console.log(index);
			}
		});
	};
	findIndex(["hi", "edabit", "fgh", "abc"], "fgh"); //➞ 2
	findIndex(["Red", "blue", "Blue", "Green"], "blue"); //➞ 1
	findIndex(["a", "g", "y", "d"], "d"); //➞ 3
	findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"); //➞ 0
}
//============== Operator - typeof Examples
{
	console.log(typeof ""); // "string"
	console.log(typeof "hello"); // "string"
	console.log(typeof String("hello")); // "string"
	console.log(typeof new String("hello")); // "object"

	console.log(typeof 0); // "number"
	console.log(typeof -0); // "number"
	console.log(typeof 0xff); // "number"
	console.log(typeof -3.142); // "number"
	console.log(typeof Infinity); // "number"
	console.log(typeof -Infinity); // "number"
	console.log(typeof NaN); // "number"
	console.log(typeof Number(53)); // "number"
	console.log(typeof new Number(53)); // "object"

	console.log(typeof true); // "boolean"
	console.log(typeof false); // "boolean"
	console.log(typeof new Boolean(true)); // "object"

	console.log(typeof undefined); // "undefined"

	console.log(typeof null); // "object"

	console.log(typeof Symbol()); // "symbol"

	console.log(typeof []); // "object"
	console.log(typeof Array(5)); // "object"

	console.log(typeof function () { }); // "function"
	console.log(typeof new Function()); // "function"

	console.log(typeof new Date()); // "object"

	console.log(typeof /^(.+)$/); // "object"
	console.log(typeof new RegExp("^(.+)$")); // "object"

	console.log(typeof {}); // "object"
	console.log(typeof new Object()); // "object"

	console.log(undefined == null); // true
	console.log(undefined === null); // false

	console.log(isNaN(NaN)); // true
	console.log(isNaN(null)); // false
	console.log(isNaN(undefined)); // true
	console.log(isNaN(Infinity)); // false

	console.log(Number.isNaN(NaN)); // true
	console.log(Number.isNaN(null)); // false
	console.log(Number.isNaN(undefined)); // false
	console.log(Number.isNaN(Infinity)); // false

	let x = NaN;

	console.log(x == NaN); // false
	console.log(x === NaN); // false

	function isNan(value) {
		return value !== value;
	}
}
//==============  Array [Reverse an Array]
{
	function reverse(array) {
		let newArray = [];
		for (let index = 0; index < array.length; index++) {
			const element = array[index];
			newArray.unshift(element);
		}
		return newArray;
	}
	// Write a function to reverse an array.
	console.log(reverse([1, 2, 3, 4])); // ➞ [4, 3, 2, 1]
	console.log(reverse([9, 9, 2, 3, 4])); // ➞ [4, 3, 2, 9, 9]
}
//==============Array [Управление парами]
{
	// Учитывая два аргумента, верните массив, содержащий эти два аргумента
	//   + дефолтный массив, результат отфильтровать по возрастанию
	// Есть функция у которой явно не определены входные опции ->

	function makePair(...numbers) {
		let defaultArray = [55, 66, 77, 88];
		let newArray = [];
		let result = newArray.concat(numbers, defaultArray).sort((a, b) => a - b);
		return result;
	}
	console.log(makePair(1, 2)); // [1, 2, 55,66,77,88]
	console.log(makePair(91, 92)); // [55,66,77,88, 91, 92]
	console.log(makePair(1, 100)); // [1, 55,66,77,88, 100]
}
//============== Topic: Array (Вернуть параметры наименьшего элемента в массиве)
{
	//     Создайте функцию getMinItemParam:
	// 1 - которая возвращает объект параметров {index: a, value:b} - наименьшее значение в массиве и его индекс
	function getFirstItem(array) {
		let minItem = {};
		let min = Math.min.apply(Math, array);
		let findIndex = array.indexOf(min);
		minItem = {
			index: findIndex,
			value: min,
		};
		return minItem;
	}

	console.log(getFirstItem([1, 0, 2, 3])); //➞ {index: 1, value: 0}
	console.log(getFirstItem([90000, 15, 100, 45, 99, 13, 2])); // ➞ {index: 6, value:2}
	console.log(getFirstItem([-500, 0, 50])); // ➞ {index: 0, value:-500}
}
//============== Topic: Object
{
	let car = { name: "lada" };
	const avtoPark = [car];
	console.log(car);
	console.log(avtoPark); // ? + Описать почему именно такой результат
}

{
	// Sub-task - 3 (Анаграмма)
	const anagram = (str1, str2) =>
		str1.toLowerCase().match(/./g).sort().join("") ===
		str2.toLowerCase().match(/./g).sort().join("");

	// console.log("anagram", anagram("AB C", "bac"));
	console.log("anagram", anagram("Азбука", "Базука"));
	// console.log("anagram", anagram("abc111, Qwe.", "Qweabcd"));
}

{
	const companies = [
		{ name: "Company One", category: "Finance", start: 1981, end: 2004 },
		{ name: "Company Two", category: "Retail", start: 1992, end: 2008 },
		{ name: "Company Three", category: "Auto", start: 2000, end: 2007 },
		{ name: "Company Four", category: "Retail", start: 1989, end: 2010 },
		{ name: "Company Five", category: "Technology", start: 2009, end: 2014 },
		{ name: "Company Six", category: "Finance", start: 1987, end: 2010 },
		{ name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
		{ name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
		{ name: "Company Nine", category: "Retail", start: 1970, end: 1989 },
	];
	const members = [
		{ name: "James", speciality: "Finance" },
		{ name: "Richard", speciality: "Retail" },
		{ name: "Thomas", speciality: "Auto" },
		{ name: "Charles", speciality: "Retail" },
		{ name: "Matthew", speciality: "Technology" },
		{ name: "Donald", speciality: "Finance" },
		{ name: "Andrew", speciality: "Auto" },
		{ name: "Kevin", speciality: "Technology" },
		{ name: "Edward", speciality: "Retail" },
	];
	const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

	// Перебрать массив companies, в консоли вывести самую старшую компанию
	let min = companies[0].start;
	let minIndex = 0;
	for (let i = 1; i < companies.length; i++) {
		if (companies[i].start < min) {
			min = companies[i].start;
			minIndex = i;
		}
	}

	console.log("oldest company:", companies[minIndex].name);
}