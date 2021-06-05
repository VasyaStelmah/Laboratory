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