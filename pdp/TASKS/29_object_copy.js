// Перепишите функцию clone таким образом, чтобы она была способна клонировать переданный как параметр объект.
// Затрагивает проблемы:
// Deep copy (глубокое копирование)
// Experimental deep copy (экспериментальное глубокое копирование)
// Shallow copy (поверхностное копирование)
// Описание проблемы:

let animal = {
  name: "animal",
  age: 10,
  childs: ["child 1", "child 2"],
};

let cat = clone(animal);
cat.name = "cat";
cat.age = 5;
cat.childs.push("child 3");

console.log(cat.name, cat.age); // cat 5
console.log(cat.childs); // [ 'child 1', 'child 2', 'child 3' ]

console.log(animal.name, animal.age); // cat 5
console.log(animal.childs); // [ 'child 1', 'child 2', 'child 3' ]

// Deep copy (глубокое копирование)
// Результат показывает нам то, что Object.assign() можно использовать для копирования методов, а JSON.parse(JSON.stringify(obj)), к сожалению, нет.
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Поверхностная копия скопирует только top-level свойства, но вложенные объекты будут использоваться между оригиналом, так и копией.
// Используем метод Object.assign()
// Это метод используется для копирования значений всех собственных перечисляемых свойств из одного или нескольких исходных объектов в один целевой объект.
{
  let obj = {
    a: 1,
    b: 2,
  };
  let objCopy = Object.assign({}, obj);
  // успешно создали копию исходного объекта без каких либо отсылок к нему.
  console.log(objCopy); // результат - { a: 1, b: 2 }
  objCopy.b = 89;
  console.log(objCopy); // результат - { a: 1, b: 89 }
  console.log(obj); // результат - { a: 1, b: 2 }
}
