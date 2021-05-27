// Перебор объекта for ... in
// Не рекомендуется так как сиимвольные значения не выводятся
{
  const SYM = Symbol();
  const o = { a: 1, b: 2, c: 3, [SYM]: 4 };
  for (let prop in o) {
    if (!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`);
  }
}
// Рекомендуется перебор с помощью цикла
// for OR forEach

// Метод Object.keys
// позволяет получить все перечислимые строковые свойства
// объекта в виде массива.
// Не выводит значения символьные
{
  const SYM = Symbol();
  const o = { a: 1, b: 2, c: 3, [SYM]: 4 };
  console.log(Object.keys(o));
  console.log(Object.values(o));
  Object.keys(o).forEach((prop) => console.log(`${prop}: ${o[prop]}`));
}

{
  const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5 };
  Object.keys(o)
    .filter((prop) => prop.match(/^x/))
    .forEach((prop) => console.log(`${prop} : ${o[prop]} `));
}

// Динамические свойства
{
  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._userGears = ["P", "N", "R", "D"];
      this._userGear = this._userGears[0];
    }
    get userGear() {
      return this._userGear;
    }
    set userGear(value) {
      if (this._userGears.indexOf(value) < 0)
        throw new Error(`Mistake gear: ${value}`);
      this._userGear = value;
    }
    shift(gear) {
      this.userGear = gear;
    }
  }
  const model1 = new Car("Tesla", "X");
  console.log(model1);
  console.log((model1._userGear = "N"));
  console.log(model1);
  console.log((model1._userGear = "T"));
  console.log(model1);
}
