// function add(x) {
//   return function(y) {
//     return x + y;
//   };
// }

function mul(x) {
  return function(y) {
    return x * y;
  };
}
//////////////////////
// var mulf = liftf(mul);

function liftf(fn) {
  return function(a) {
    return function(b) {
      return a * b;
    };
  };
}

console.log(liftf(mul)(3)(5));

// console.log(liftf(addf)(3)(5));
