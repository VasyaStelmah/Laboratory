//==============Array [Управление парами]
{
    // Учитывая два аргумента, верните массив, содержащий эти два аргумента
    //   + дефолтный массив, результат отфильтровать по возрастанию
    // Есть функция у которой явно не определены входные опции ->
    function makePair(...numbers) {
        let defaultArray = [55, 66, 77, 88];
        let newArray = [];
        return newArray.concat(numbers, defaultArray).sort((a, b) => a - b);

    }
    console.log(makePair(1, 2)); // [1, 2, 55,66,77,88]
    console.log(makePair(91, 92)); // [55,66,77,88, 91, 92]
    console.log(makePair(1, 100)); // [1, 55,66,77,88, 100]
}