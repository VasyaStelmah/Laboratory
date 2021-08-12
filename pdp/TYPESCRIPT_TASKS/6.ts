/* eslint-disable no-console */
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:
// 348597 => [7,9,5,8,4,3]

const digitize = (num: number):number[] =>{
  return num.toString().split('').reverse().map((item)=> Number(item));
};
console.log(digitize(348597)); //  => [7,9,5,8,4,3]