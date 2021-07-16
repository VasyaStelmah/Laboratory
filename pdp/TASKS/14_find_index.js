//==============Array [Find the Index]
{
    //Create a function that takes an array and a string as arguments and return the index of the string.
    // -----Version 1
    findIndex1 = (array, searchWord) => {
        array.forEach(function (item, index) {
            if (item === searchWord) {
                console.log(index);
            }
        });
    };
    // -----Version 2
    findIndex2 = (array, searchWord) => {
        return array.indexOf(searchWord)
    };
    findIndex1(["hi", "edabit", "fgh", "abc"], "fgh"); //➞ 2
    findIndex1(["Red", "blue", "Blue", "Green"], "blue"); //➞ 1
    findIndex1(["a", "g", "y", "d"], "d"); //➞ 3
    findIndex1(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"); //➞ 0
    findIndex2(["hi", "edabit", "fgh", "abc"], "fgh"); //➞ 2
    findIndex2(["Red", "blue", "Blue", "Green"], "blue"); //➞ 1
    findIndex2(["a", "g", "y", "d"], "d"); //➞ 3
    findIndex2(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"); //➞ 0
}