function limit(fn, count) {
  let i = 0;
  return function(a, b) {
    if (i <= count) {
      i++;
      return fn(a, b);
    }
    return undefined;
  };
}
function add(a, b) {
  return a + b;
}
console.log(limit(add, 1)(3, 4));
