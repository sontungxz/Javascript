/**
 * I: nxn matrix
 * O: rotated matrix 90 degree, clockwise
 * C rotate matrix inplace
 *
 */
function rotateMatrix(m) {
  debugger;
  var n = m.length;

  for (var i = 0; i < Math.floor(n / 2); i++) {
    for (var j = 0; j < n - 2 * i - 1; j++) {
      var temp = m[i + j][n - 1 - i];
      m[i + j][n - 1 - i] = m[i][i + j];
      m[i][i + j] = temp;

      temp = m[n - 1 - i][n - 1 - i - j];
      m[n - 1 - i][n - 1 - i - j] = m[i][i + j];
      m[i][i + j] = temp;

      temp = m[n - 1 - i - j][i];
      m[n - 1 - i - j][i] = m[i][i + j];
      m[i][i + j] = temp;
    }
  }
  return m;
}

console.log(rotateMatrix([[1, 2], [3, 4]]));
