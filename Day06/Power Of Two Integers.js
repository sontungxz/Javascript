function Pow(n) {
  debugger;
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
      if (Math.pow(i, j) === n) {
        return "" + "true as " + i + "^" + j;
      }
    }
  }
  return false;
}
console.log(Pow(10));
