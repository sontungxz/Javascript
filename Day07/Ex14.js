function to(gen, value) {
  debugger;
  let count = gen();
  return function() {
    if (count > value) {
      return undefined;
    }

    return gen();
  };
}
///
function from(num) {
  let a = num;
  return function() {
    return a++;
  };
}
var index = to(from(1), 3);
// undefined
console.log(index());
console.log(index());
console.log(index());
console.log(index());
