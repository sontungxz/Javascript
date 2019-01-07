function ImplementFilter(arr, fn) {
  debugger;
  let temp = [];
  for (let i of arr) {
    if (fn(i)) {
      temp.push(i);
    }
  }
  return temp;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let temptemp = [];
console.log(ImplementFilter(arr, x => x < 5));
