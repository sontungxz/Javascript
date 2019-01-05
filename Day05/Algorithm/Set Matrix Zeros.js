/**
 * m x n matrix of 0s and 1s if an element is 0,
 *  set its entire row and column to 0.
 * Do it in place.
 */
/**
 * chạy 1 vòng for kiểm tra ma trận nếu
 * phần tử là 0 đánh dấu hàng và cột
 * tiếp theo chạy vòng for biến hàng và cột
 * đã đánh dấu thành giá trị 0.
 */
function setZeros(mat) {
  var row = [];
  var col = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        row.push(i);
        col.push(j);
      }
    }
  }
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (row.includes(i) || col.includes(j)) {
        mat[i][j] = 0;
      }
    }
  }
  return mat;
}
console.log(setZeros([[1, 0], [1, 1]]));
