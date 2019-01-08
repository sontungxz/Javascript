function twice(bin) {
  return function una(x) {
    return bin(x, x);
  };
}

function add(a, b) {
  return a + b;
}
console.log(twice(add)(2));
