function matrix(n) {
  debugger;
  var res = [];
  for (var i = 0; i < n; i++) {
    var temp = [];
    for (var j = 0; j < n; j++) {
      temp.push(0);
    }
    res.push(temp);
  }
  return res;
}
console.log(matrix(3));
