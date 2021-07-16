//============== Topic: Array (Вернуть параметры наименьшего элемента в массиве)
{
    //     Создайте функцию getMinItemParam:
    // 1 - которая возвращает объект параметров {index: a, value:b} - наименьшее значение в массиве и его индекс
    // -----Version 1
    function getFirstItem1(array) {
        let minItemObject = {};
        let min = Math.min.apply(Math, array);
        let findIndex = array.indexOf(min);
        minItemObject = {
            index: findIndex,
            value: min,
        };
        return minItemObject;
    }
    // -----Version 2
    function getFirstItem2(array) {
        min = array[0]
        array.forEach((item, index) => {
            if (item < min) {
                min = item
                minIndex = index
            }
        })
        return { index: minIndex, value: min }
    }

    console.log(getFirstItem1([1, 0, 2, 3])); //➞ {index: 1, value: 0}
    console.log(getFirstItem1([90000, 15, 100, 45, 99, 13, 2])); // ➞ {index: 6, value:2}
    console.log(getFirstItem1([-500, 0, 50])); // ➞ {index: 0, value:-500}
    console.log(getFirstItem2([1, 0, 2, 3])); //➞ {index: 1, value: 0}
    console.log(getFirstItem2([90000, 15, 100, 45, 99, 13, 2])); // ➞ {index: 6, value:2}
    console.log(getFirstItem2([-500, 0, 50])); // ➞ {index: 0, value:-500}

}