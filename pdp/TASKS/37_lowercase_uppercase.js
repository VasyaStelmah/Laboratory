//Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
{
  mapping = (array) => {
    let newObject = {}
    for (let i = 0; i < array.length; i++) {
      Object.defineProperty(newObject, array[i], {
        value: array[i].toUpperCase(),
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
    return newObject
  }
  //Examples
  console.log(mapping(["p", "s"]))// ➞ { "p": "P", "s": "S" }
  console.log(mapping(["a", "b", "c"]))// ➞ { "a": "A", "b": "B", "c": "C" }
  console.log(mapping(["a", "v", "y", "z"]))// ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
}