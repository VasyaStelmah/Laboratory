//============== Topic: Array (Вернуть параметры наименьшего элемента в массиве)
{
    //     Создайте функцию getMinItemParam:
    // 1 - которая возвращает объект параметров {index: a, value:b} - наименьшее значение в массиве и его индекс
    function getFirstItem(array) {
        let minItemObject = {};
        let min = Math.min.apply(Math, array);
        let findIndex = array.indexOf(min);
        minItemObject = {
            index: findIndex,
            value: min,
        };
        return minItemObject;
    }

    console.log(getFirstItem([1, 0, 2, 3])); //➞ {index: 1, value: 0}
    console.log(getFirstItem([90000, 15, 100, 45, 99, 13, 2])); // ➞ {index: 6, value:2}
    console.log(getFirstItem([-500, 0, 50])); // ➞ {index: 0, value:-500}
}