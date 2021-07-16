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