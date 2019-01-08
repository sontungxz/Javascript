function composeb(a, b) {
  return function(x, y, z) {
    return b(a(x, y), z);
  };
}
function add(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}
console.log(composeb(add, mul)(2, 3, 7))
