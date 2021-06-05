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
    let res = [1, 2, 3].push(9)
    console.log(res);
}