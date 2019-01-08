function composeu(a, b) {
  return function(x) {
    return b(a(x));
  };
}
function dou(x) {
  return x + x;
}
function squ(x) {
  return x * x;
}
console.log(composeu(dou, squ)(5));
