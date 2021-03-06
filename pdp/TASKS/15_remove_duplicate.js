//============== Array [Remove duplicates from an array of numbers/strings]
{
  const values = [3, 1, 3, 5, 2, 4, 4, 4];
  const uniqueArray = []; // uniqueValues is [3, 1, 5, 2, 4]
  unique1 = (array, uniqueArray) => {
    array.forEach(function (item) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    });
    return uniqueArray;
  };
  unique2 = (array) => {
    const set1 = new Set(array);
    return [...set1]
  };
  console.log(unique1(values, uniqueArray));
  console.log(unique2(values));
}