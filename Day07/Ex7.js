var inc = function inc(x) {
  return x + 1;
};

var inc2 = function(x) {
  return x + 1;
};

var inc3 = x => {
  return x + 1;
};
console.log(inc(5)); // 6
console.log(inc(inc(5))); // 7
