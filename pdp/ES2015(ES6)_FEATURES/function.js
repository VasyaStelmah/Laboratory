// Для ясности: объект о в функции не зависит от
// объекта о за пределами функции,
// но оба они обращаются к одному и тому же объекту.
// Мы можем увидеть это различие
// снова в присваивании.
function f(o) {
  o.message = "Изменено в f";
  //   let o = {
  //     message: "Новый объект !",
  //   };
  console.log(`2 Bнyтpи o.message=" ${o.message} " ( после присваивания ) `);
}
let o = {
  message: "Начальное значение",
};
console.log(`1 Пepeд вызовом o.message=" ${o.message} " `);
f(o);
console.log(`3 Пocлe вызова o.message= " ${o.message} " `);

//------------- ДЕСТРУКТУРИЗАЦИЯ аргументов присваивание

function destruct({ a, b, c }) {
  return console.log(`${a} ${b} ${c}`);
}
const obj = {
  a: "Первое",
  b: "Второе",
  c: "Третье ",
  d: "Четвертое",
};
destruct(obj);

//-------- ОПЕРАТОР РАСШИРЕНИЯ ...
// Оператор расширения должен стоять последним аргументом в функции
function addPrefix(prefix, ...words) {
  const arr = [];
  for (let i = 0; i < words.length; i++) {
    arr[i] = prefix + words[i];
    console.log(arr[i]);
  }
}
addPrefix("Пред", "ложение замуж", "принять действие");

// ------ФУНКЦИЯ КАК СВОЙСТВО В ОБЪЕКТЕ
// РАзное обявление но функционально эквивалентно
const o1 = {
  name: "NAME",
  bark: function () {
    return console.log("woooff!!");
  },
};
// В спецификацию ЕSб введен новый сокращенный синтаксис для методов
const o2 = {
  name: "NAME",
  bark() {
    return console.log("woooff!!");
  },
};

// ----КЛЮЧЕВОЕ СЛОВО this

// Обычно ключевое слово this имеет отношение
// к функциям, являющимся свойствами
// объектов. При вызове метода переменной this
// присваивается значение конкретного
// объекта, в котором произошел вызов.

const o3 = {
  name: "Wallace",
  speak() {
    return console.log(`My name is ${this.name}`);
  },
};
o3.speak();

// ПРОБЛЕМЫ СО ВЛОЖЕННЫМИ ФУНКЦИЯМИ this
const o4 = {
  name: "Julie",
  greetBackwards: function () {
    const self = this;
    function getReverseName() {
      let nameBackwards = "";
      console.log(self.name.length);
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return console.log(nameBackwards);
    }
    return console.log(` ${getReverseName()} si eman ym , olleH `);
  },
};
o4.greetBackwards();

//---------- СТРЕЛОЧНАЯ ФУНКЦИЯ
// В спецификацию ЕSб введен новый долгожданный синтаксис
// стрелочной нотации
// (arrow notation).

const f1 = function () {
  return console.log("hello");
};
// У стрелочных функций действительно есть одно
// серьезное отличие от обычных
// функций: переменная this привязывается лексически,
// точно так же, как и любая другая переменная.
const f1arrow = () => {
  console.log("hello");
};

// -----МЕТОДЫ call, apply, bind

// call метод к торогму привязывается контекст объекта в скобках
const bruce = {
  name: "Bruce",
};
const madeline = {
  name: "Madeline",
};
function sayName() {
  return console.log(`Hello ${this.name}`);
}
sayName();
sayName.call(bruce);

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  console.log(birthYear);
  this.occupation = occupation;
  console.log(occupation);
}
update.call(bruce, 1949, "singer");
console.log(bruce);

// Метод apply аргументы передаются в виде массива.
update.apply(bruce, [1955, "actor"]);
console.log(bruce);

// Есть еще одна функция, bind, которая позволяет
// определить значение для переменной
// this . Функция Ьind позволяет перманентно
// ассоциировать значение для this с функцией.

const updateBruce = update.bind(bruce);
updateBruce(1904, "Photo");
console.log(bruce);
