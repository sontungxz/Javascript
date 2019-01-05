function reverseArray(arr) {
  var newArr = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrInPlace(arr) {
  debugger;
  var i = arr.length - 1;
  var j = 0;

  while (i > j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i--;
    j++;
  }
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrInPlace(arrayValue);
console.log(arrayValue);
