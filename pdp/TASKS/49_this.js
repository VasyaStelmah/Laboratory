// Создайте калькулятор
// Создайте объект calculator (калькулятор) с тремя методами:
const calculator = {
  read: (valueOne, valueTwo) => {
    this.valueOne = valueOne
    this.valueTwo = valueTwo
    return `Записаны значения в объект`
  },
  sum: () => {
    return this.valueOne + this.valueTwo;
  },
  mul: () => {
    return this.valueOne * this.valueTwo;
  },
};

console.log(calculator.read(2, 3));
console.log(calculator.sum());
console.log(calculator.mul());

// Цепь вызовов
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  }
}

ladder.up().up().down().up().down().showStep(); // 1

let person = {
  age: 28,
  name: "Max",
  job: "Frontend",
  displayInfo: function (time) {
    console.log(this);//this указывает на объект к которому привязан
    //вывод информации через задержку
    //В милисекундах
    setTimeout(
      function () {
        console.log('Name:', this.name)//не выводится this указывает на глобальный объект window
        console.log('Age:', this.age)//не выводится this указывает на глобальный объект window
        console.log('Job:', this.job)//не выводится this указывает на глобальный объект window
      },
      time
    );
  },
  displayInfoWithContextOne: function (time) {
    //--1--Способ привязки контекста
    //создать переменную чтобы в нее положить this
    let self = this;
    setTimeout(
      function () {
        console.log("Name:", self.name);//Name: Max
        console.log("Age:", self.age);//Age: 28
        console.log("Job:", self.job);//Job: Frontend
      },
      time
    );
  }, displayInfoWithContextTwo: function (time) {
    setTimeout(
      function () {
        //--2--Способ привязки контекста
        //обратиться к методу .bind(this) чтобы передать контекст
        console.log("Name:", this.name);//Name: Max
        console.log("Age:", this.age);//Age: 28
        console.log("Job:", this.job);//Job: Frontend
        //--/2--Способ
      }.bind(this),
      time
    )
  }
};
person.displayInfo(2000);
person.displayInfoWithContextOne(2000);
person.displayInfoWithContextTwo(2000);

function printObject(objName) {
  console.log("Printing object: ", objName);
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      console.log("[" + key + "]", this[key]);
    }
  }
}
let person = {
  firstName: "Max",
  job: "Backend",
  age: 29,
  friends: ["Elena", "Igor"],
};
let car = {
  name: "Ford",
  model: "Focus",
  year: 2017,
};
let printPerson = printObject.bind(person);
printPerson("Person");
//2 метод
printObject.call(car, "Car");
//3 метод
printObject.apply(person, ["Person"]);