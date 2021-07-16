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
{
    function reverse(array) {

        return array.reverse();
    }
    // Write a function to reverse an array.
    console.log(reverse([1, 2, 3, 4])); // ➞ [4, 3, 2, 1]
    console.log(reverse([9, 9, 2, 3, 4])); // ➞ [4, 3, 2, 9, 9]
}