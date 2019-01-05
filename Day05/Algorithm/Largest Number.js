function largestNumber(num) {
  var res = num.sort(function(a, b) {
    //chuyển a và b thành string và ghép vào nhau
    var left = `${a}${b}`;
    var right = `${b}${a}`;
    //theo thứ tự (sau - trước) sẽ là sắp từ sau lên trước (trong th này là lớn đén nhỏ dần)
    return Number(right) - Number(left);
  });
/** ghép các phần tử đc đổi từ số -> string -> ghép -> chuyển về số rồi so sánh để sắp xếp
 *-> join bằng khoảng trống "" -> lại thành string
 * 
 */
  return res.join("");
}

console.log(largestNumber([3, 30, 34, 5, 9]));

console.log(largestNumber([9, 99, 98, 998, 9997]));
