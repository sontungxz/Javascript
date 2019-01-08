let res = "";
function toBin(n) {
  debugger;

  if (n === 0) {
    return res;
  }

  let count = Math.floor(n / 2);
  res = "".concat(n % 2).concat(res);
  return toBin(count);
}
console.log(toBin(245122519841961556561151664850));
