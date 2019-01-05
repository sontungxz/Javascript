function AddOne(arr) {
  var str = "";
  for (var i of arr) {
    str = str + i;
  }
  var tempNum = Number(str) + 1;
  var tempStr = tempNum + "";
  var result = [];

  for (var j of tempStr) {
    result.push(j);
  }
  return result;
}
console.log(AddOne([1, 2, 3]));
