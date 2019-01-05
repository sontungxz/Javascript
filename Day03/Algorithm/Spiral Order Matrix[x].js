function createMatrix(n) {
  var result = [];
  for (var i = 0; i < n; i++) {
    var temp = [];
    for (var j = 0; j < n; j++) {
      temp.push(0);
    }
    result.push(temp);
  }
  return result;
}

function spiral()