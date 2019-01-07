function identityf(x) {
  return function() {
    return x;
  };
}
var a = identityf(5);
console.log(a());
