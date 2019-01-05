//tạo ma trận rộng hình kim cương
//xếp các phần tử từ ma trận n x n vào theo quy luật
//tổng của hàng và cột của phần tử đó là hàng của ma trận kim cương.

function AntiDiag(mat) {
  debugger;
  var res = [];
  var rowlen = mat.length * 2 - 1;

  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat.length; j += 1) {
      res = res[i + J].push(mat[i][j]);
    }
  }
}
console.log(AntiDiag([[1, 2, 3][(4, 5, 6)][(7, 8, 9)]]));
