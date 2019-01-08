function reverse(bin) {
  return function(a, b) {
    return bin(b, a);
  };
}

function sub(a, b) {
  return a - b;
}
var bus = reverse(sub);
bus(3, 2); // -1
console.log(reverse(sub)(3, 2));
