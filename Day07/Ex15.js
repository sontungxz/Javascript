function fromTo(start, end) {
  return function() {
    if (start < end) {
      return start++;
    }
    return undefined;
  };
}
var index = fromTo(0, 3);
console.log(index()); // 0
console.log(index());
console.log(index());
console.log(index());
