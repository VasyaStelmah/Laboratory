//Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
//Examples
console.log(addName({}, "Brutus", 300)); //➞ { Brutus: 300 }
console.log(addName({ piano: 500 }, "Brutus", 400)); // ➞ { piano: 500, Brutus: 400 }
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); //➞ { piano: 500, stereo: 300, Caligula: 440 }
function addName(object, key, value) {
  object[key] = value;
  return object;
}
