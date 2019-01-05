//Input: n
//output: true/false
// chay vong for tu 2 den n - 1 neu n chia het
// 1 phan tu trong vong lap thi tra ve false
function VerifyPrime(n) {
  debugger;
  if (n < 2) {
    return false;
  }
  let isPrime = true;
  let i = 2;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      isPrime = false;
    }
  }
  return isPrime;
}
console.log(VerifyPrime(5));
