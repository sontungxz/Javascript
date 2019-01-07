function addf(x) {
  return function(y) {
    return x + y;
  };
}
console.log(addf(3)(4));
