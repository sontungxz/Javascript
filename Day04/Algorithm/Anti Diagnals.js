//tạo ma trận rộng hình kim cương
//xếp các phần tử từ ma trận n x n vào theo quy luật
//tổng của hàng và cột của phần tử đó là hàng của ma trận kim cương.

function AntiDiag(mat) {
  debugger;
  var res = [];

  for (let i = 0; i < 2 * mat.length - 1; i += 1) {
    
    res.push([]);
  }

  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat.length; j += 1) {
      res[i + j].push(mat[i][j]);
    }
  }
  return res;
}
console.log(AntiDiag([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
