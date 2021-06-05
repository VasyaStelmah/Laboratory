// task -1
// Выведите на экран текущие день, месяц, год и текущий знак зодиака в формате 'год-месяц-день (знак зодиака)'.
let date = new Date();
console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);

// task - 2
// Выведите на экран текущий месяц словом, на английском (полностью)
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let date = new Date();
let month = date.getMonth();
console.log(months[month]);
// task - 3
// Выведите на экран количество секунд с начала дня до настоящего момента времени.
let date = new Date();
let now = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  0,
  0,
  0
);
let result = Math.floor((date.getTime() - now.getTime()) / 1000);
console.log(result);
