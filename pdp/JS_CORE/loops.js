// Цикл for . . . in предназначен
// для перебора свойств объекта по ключам.
const player = {
  name: "Thoma`s",
  rank: "Midshipman",
  age: 25,
};
for (let prop in player) {
  if (!player.hasOwnProperty(prop)) continue;
  console.log(prop + " : " + player[prop]);
}

// Оператор for . . . of - нововведение ES6, обеспечивающее
// еще один способ циклического
// перебора элементов коллекции.
// Цикл for . . . of применим к массивам и
// в более общем случае к любым итерируемым
// ( iteraЬle)объектам.
const hand = [randFace(), randFace(), randFace()];
for (let face of hand) console.log(` You rolled ... ${face}!`);

nameJ = "JULIYA";
for (let word of nameJ) console.log(`Word ${word}`);
let funds = 2;
while (funds > 1 && funds < 10) {
  funds = funds + 2;
  if (funds === 6) {
    console.log(" Heyдaчa ! Пропустите этот раунд . . . . ");
    continue;
  }
  console.log(funds);
}
console.log(funds);
