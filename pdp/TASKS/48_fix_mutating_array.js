let x = [3, 3, 3, 3, 3, 3, 3];
change = (x, times) => {
  let copyArrayX = x.slice();
  for (let i = 0; i < copyArrayX.length; i++) {
    let j = 1;
    while (j <= times) {
      if (i >= j && i < copyArrayX.length - j) {
        copyArrayX[i]--;
      }
      j++;
    }
  }
  return copyArrayX;
}
console.group();
console.log(change(x, 0))  // [3, 3, 3, 3, 3, 3, 3];
console.log(change(x, 1))  // [3, 2, 2, 2, 2, 2, 3];
console.log(change(x, 2))  // [3, 2, 1, 1, 1, 2, 3];
console.log(change(x, 3));// [3, 2, 1, 0, 1, 2, 3]
console.groupEnd();
