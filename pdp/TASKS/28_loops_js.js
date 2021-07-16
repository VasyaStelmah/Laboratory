const iterationAPI = {
  whatIsLastValue: () => {
    //Какое последнее значение выведет этот код? Почему?
    let i = 3;
    while (i) {
      console.log(i--);
    }
  },

  getValueLoopWhile: () => {
    // Какие значения выведет цикл while?
    i = 0;
    while (++i < 5) console.log(i);
    // Постфиксный вариант i++
    i = 0;
    while (i++ < 5) console.log(i);
  },
  getValueLoopFor: () => {
    // Какие значения выведет цикл for?
    // Постфиксная форма:
    for (i = 0; i < 5; i++) console.log(i);
    // Префиксная форма:
    for (i = 0; i < 5; ++i) console.log(i);
  },
  getEvenNumbers: () => {
    // Выведите чётные числа
    // При помощи цикла for выведите чётные числа от 2 до 10.
    for (i = 2; i <= 10; i++) {
      if (i % 2 === 0) {
        console.log(i)
      }
    }
  },
  changeForOnWhile: () => {
    // Замените for на while
    // Перепишите код, заменив цикл for на while, без изменения поведения цикла.
    // for (let i = 0; i < 3; i++) {
    //   console.log(`number ${i}!`);
    // }
    i = 0;
    while (i < 3) {
      console.log(`number ${i}!`)
      i++
    }
  },
  getResultSimpleNumbers: (number) => {
    // Вывести простые числа
    // Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
    // Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
    // Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
    // Напишите код, который выводит все простые числа из интервала от 2 до n.
    // Для n = 10 результат должен быть 2, 3, 5, 7.
    // P.S.Код также должен легко модифицироваться для любых других интервалов.i = 0;
    for (let i = 2; i <= number; i++) {
      let flag = 1;
      for (let j = 2; (j <= i / 2) && (flag === 1); j = j + 1) {
        if (i % j === 0) {
          flag = 0
        }
      }
      if (flag === 1) { console.log(i); }
    }
  }
}
//последнее значение будет 1 так как цикл выполняется пока условие true, при значении i = 0 будет false  в условии
iterationAPI.whatIsLastValue();
// С префиксным вариантом будет последний 4 так как он сначала прибавляет а потом сравнивает
// С постфиксным значением будет последний 5 так как он сначала сравниевает со старым значением а потом прибаляет  
iterationAPI.getValueLoopWhile();
// Результаты выполнения в префиксной и постфиксной форме будут идентичны
iterationAPI.getValueLoopFor();
iterationAPI.getEvenNumbers();
iterationAPI.changeForOnWhile();
iterationAPI.getResultSimpleNumbers(100);


