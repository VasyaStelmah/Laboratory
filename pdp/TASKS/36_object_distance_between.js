//In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.
//Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.
getDistance = (coordinateA, coordinateB) => {
    let length = coordinateA.x - coordinateB.x
    let height = coordinateA.y - coordinateB.y
    //Метод Math.sqrt() возвращает квадратный корень числа, то есть
    //Метод Math.pow() возвращает основание, возведённое в степень показатель, то есть, значение выражения основаниепоказатель.
    let hypotenuse = Math.sqrt(Math.pow(length, 2) + Math.pow(height, 2))
    //Метод toFixed() форматирует число, используя запись с фиксированной запятой.
    return Number(hypotenuse.toFixed(3));
}
//Examples
console.log(getDistance({ x: -2, y: 1 }, { x: 4, y: 3 }))// ➞ 6.325
console.log(getDistance({ x: 0, y: 0 }, { x: 1, y: 1 })) //➞ 1.414
console.log(getDistance({ x: 10, y: -5 }, { x: 8, y: 16 }))// ➞ 21.095
console.log(getDistance({ x: 6, y: -5 }, { x: -8, y: -16 }))// ➞ 17.804
    //Notes
    //The "distance" is the shortest distance between the two points, or the straight line generated from a to b.