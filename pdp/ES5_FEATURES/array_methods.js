// ----Методы push и рор
// -----Методы shift и unshift
// Методы push и рор добавляют элементыв конец
// массива (по месту) и удаляют их соответственно.
//  Методы shift и unshift добавляют элементы
//  в начало массива (по месту) и удаляют их соответственно.

const arr = ["b", "c", "d"];
// добавляет в конец массива значение
console.log(arr.push("e"));
console.log(arr.push("e"));
console.log(arr.push("e"));
console.log(arr);
// удаляет с конца значение
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr);
// добавляет в начало значение
console.log(arr.unshift("a"));
console.log(arr.unshift("a"));
console.log(arr.unshift("a"));
console.log(arr);
// удаляет с начала значение
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());
console.log(arr);

// --------------Метод concat
// Метод concat добавляет в массив несколько
// элементов и возвращает его копию.
// Если передать методу concat массивы, он
// разделит их и добавит их элементы в исходный массив.
{
  const arr = [1, 2, 3];
  console.log(arr.concat(4, 5, 6));
  console.log(arr.concat([4, 5, 6]));
  console.log(arr.concat(4, [5, 6]));
  console.log(arr.concat([4, 5], 6));
  console.log(arr);
}

// -----------Метод s p l i c e
// Первый аргумент - и ндекс, с которого должно
// начинаться изменение; второй аргумент -
// количество удаляемых элементов (если вы не хотите
// удалять элементы, используйте О), а остальные
//  аргументы - это добавляемые элементы.

{
  const arr = [1, 2, 3, 4, 5];
  //   удаляет значение в массиве до 3 значения
  console.log(arr.slice(3));
  //   удаляет значение до 2 и после 4 значения
  console.log(arr.slice(2, 4));
  //   удаляет значение до 1 и
  console.log(arr.slice(1, 0, 5, 6, 7));
  console.log(arr);
}

// ------Копирование и вставка в пределах массива
// Спецификация ЕSб представляет новый метод,
// copyWithin, получающий последовательность
// элементов из массива, и копирующий по месту,
// в другую часть массива, переписывая любые
// находящиеся там элементы.
// Первый аргумент - откуда копировать,
// второй аргумент - куда копировать
// третий (необязательный) аргумент - где прекратить копирование.

{
  const arr = [1, 2, 3, 4];

  console.log(arr.copyWithin(1, 2));
  console.log(arr.copyWithin(2, 0, 2));
  console.log(arr.copyWithin(0, -3, -1));
}

// ------Заполнение массива заданным значением
{
  // Спецификация ЕSб вводит новый метод, fill, который
  // позволяет задать любое  количество элементов с
  // фиксированным значением (по месту). Он особенно
  // полезен,  когда используется вместе с конструктором
  // Array (который позволяет определить  начальный размер
  // массива). Вы можете произвольно задать начальный и
  // конечный   индексы, если хотите заполнить только
  // часть массива (отрицательные индексы работают
  // как обычно)
  const arr = new Array(5).fill(1);
  console.log(arr);
  console.log(arr.fill("a"));
  console.log(arr.fill("b", 1));
  console.log(arr.fill("c", 2, 4));
  console.log(arr.fill(5.5, -4));
  console.log(arr.fill(0, -3, -1));
}

// ------Обращение и сортировка массивов
{
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.reverse());
}
{
  const arr = [5, 4, 3, 2, 1];
  console.log(arr.sort());
}
// Метод sort позволяет также определить функцию
// сортировки (sort function), которая может оказаться
// весьма удобной.
{
  const arr = [
    { name: "Suzane" },
    { name: "Jim" },
    { name: "Treovor" },
    { name: "Amanda" },
  ];
  // нет изменений
  console.log(arr.sort());
  console.log(arr.sort((a, b) => a.name > b.name));
  console.log(arr.sort((a, b) => a.name[1] > b.name[1]));
}

//-------------- Поиск в массиве
// Метод indexOf просто возвращает индекс первого
//  найденного элемента, строго равного искомому
//  (есть соответствующий метод lastindexOf,
//   осуществляющий поиск в обратном направлении и
//   возвращащий последний индекс, который соответствует
// искомому).

{
  const o = {
    name: "Jerry",
  };
  const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

  console.log(arr.indexOf(5));
  console.log(arr.lastIndexOf(5));
  console.log(arr.indexOf("a"));
  console.log(arr.lastIndexOf(5));
  console.log(arr.indexOf({ name: "Jerry" }));
  console.log(arr.indexOf(o));
}
// Далее, метод findindex подобен методу indexOf в
// том, что возвращает индекс (или - 1 при отсутствии
//   соответствия), но более гибко. Он позволяет задать
//   функцию, которая определяет, является ли элемент
//   соответствующим ( f indindex не может начать работу
//   с произвольного индекса и не имеет аналога lastindexOf).

{
  const arr = [
    { id: 5, name: "Juduth" },
    { id: 7, name: "Francis" },
  ];
  // возвращает индекс элемента
  console.log(arr.findIndex((o) => o.id === 5));
  console.log(arr.findIndex((o) => o.name === "Francis"));
  // возвращает сам элемент
  console.log(arr.find((o) => o.id === 5));
}
// Методы find и findindex позволяют также использовать
//  переменную this во время вызова функции. Это может
//  быть очень удобно, если вам нужно вызвать
// функцию, как будто она является методом объекта.
// Рассмотрим следующие эквивалентные
// методики поиска объекта Person по идентификатору.

{
  class Person {
    constructor(name) {
      this.name = name;
      this.id = Person.nextId++;
    }
  }
  Person.nextId = 0;
  const jamie = new Person("Jamie"),
    juliet = new Person("Juliet"),
    peter = new Person("Peter"),
    jay = new Person("Jay");
  const arr = [jamie, juliet, peter, jay];

  console.log(arr.find((p) => p.id === juliet.id));
}

// ----Фундаментаnьные операциинад массивом: map и filter
// Метод map преобразует элементы в массиве
// Методы map и filter возвращают копии и не
// изменяют исходный массив
{
  const cart = [
    { name: "Widget ", price: 9.95 },
    { name: "Gadget", price: 22.95 },
  ];
  const names = cart.map((x) => x.name);
  console.log(names);
  const prices = cart.map((x) => x.price);
  console.log(prices);
  const discountPrices = prices.map((x) => x * 0.8);
  console.log(discountPrices);

  const lcNames = names.map((x) => x.toLowerCase());
  console.log(lcNames);
}
// Передаваемая в качестве параметра функция вызывается
// для каждого элемента.Ей передаются три аргумента:
// сам элемент, его индекс в массиве и сам массив (который
// редко полезен).
{
  const items = ["Widget", " Gadget"];
  const prices = [9.95, 22.95];
  const cart = items.map((x, i) => ({ name: x, price: prices[i] }));

  console.log(cart);
}

// Метод filter, как и подразумевает его имя, предназначен
// для удаления всего нежелательного из массива.

{
  const cards = [];
  for (let suit of ["H", "C", "D", "S"])
    for (let value = 1; value <= 13; value++) cards.push({ suit, value });
  cards.filter((c) => c.suit === "D");
  console.log(cards);
}

//------- Маrия массивов: метод reduce
// В то время как map преобразует
// каждый элемент в массиве, метод reduce
// преобразует весь массив.
// способен воспроизвести возможности
// функций map и filter

// Однако первое значение функции reduce -
// аккумулятор ( accumulator), в который
// сводится массив. Остальная часть аргументов
// вполне ожидаема: текущий элемент
// массива, текущий индекс и сам массив.
// Помимо функции обратного вызова, методу
// reduce передается (необязательно)
// начальное значение для аккумулятора. Давайте
// рассмотрим простой пример - суммирование
// чисел в массиве.

{
  const arr = [5, 7, 2, 4];
  const sum = arr.reduce((a, x) => (a += x), 0);
  //сумма всех значений массива
  console.log(sum);
}

{
  const words = ["Beach", "Rodeo", "Angel", "Aardvar", "Xyte", "Efre"];
  const alphabetical = words.sort().reduce((a, x) => {
    if (!a[x[0]]) a[x[0]] = [];
    console.log("a[x[0]]=", a[x[0]]);
    a[x[0]].push(x);
    console.log("x=", x);
    console.log("a=", a);

    return a;
  }, {});
  console.log(alphabetical);
}
