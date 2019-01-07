function ImplementReuduce(arr, init) {
  debugger;

  for (let i of arr) {
    init += i;
  }
  return init;
}
let arr = [1, 2, 3, 4];
console.log(ImplementReuduce(arr, ""));
