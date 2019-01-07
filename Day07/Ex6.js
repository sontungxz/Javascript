function add(x) {
  return function(y) {
    return x + y;
  };
}

function mul(x) {
  return function(y) {
    return x * y;
  };
}
/////////////////////

function curry(fn, arg) {
  return fn(arg);
}
console.log(curry(mul, 5)(6));
