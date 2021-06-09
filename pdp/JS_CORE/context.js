function hello() {
  //this Относиться к контексту window
  console.log("Hello", this);
}

const person = {
  name: "Vlad",
  age: 25,
  sayHello: hello,
  //.bind()в каком контекте нужно определить эту функцию
  sayHelloWindow: hello.bind(window),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    //this вызывется в контексте person
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};
//this вызывается в контексте объекта person
//указывает на тот объект в контексте которого это было вызвано
//Слева от точки где мы вызывает эту функцию
console.log(person.sayHello());

const lena = {
  name: "Elena",
  age: 23,
};
// вызываем объект person функцию logInfo с контекстом lena
person.logInfo.bind(lena)();
//метод bind не вызывает функцию но хранит параметры
person.logInfo.bind(lena, "Frontend", "8-999-123-12-23")();
//Отличие между bind и call
//call сразу вызывает функцию
person.logInfo.call(lena, "Frontend", "8-999-123-12-23");
//метод apply принимает всего 2 параметра и сразу вызывает функцию
person.logInfo.apply(lena, ["Frontend", "8-999-123-12-23"]);

const array = [1, 2, 3, 4, 5];

function multBy(arr, n) {
  return arr.map(function (i) {
    return i * n;
  });
}

console.log(multBy(array, 15));

{
  const array = [1, 2, 3, 4, 5];
  Array.prototype.multyBy = function (n) {
    return this.map(function (i) {
      return i * n;
    });
  };
  console.log(array.multyBy(2));
}
