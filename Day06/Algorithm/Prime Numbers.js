//Input: N
//output: mang  da sap xep cac so nguyen to tu 0 den N

function VerifyPrime(n) {
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
console.log(VerifyPrime(7));

function PrimeArr(N) {
  var arr = [];
  if (N < 2) {
    return [];
  }
  for (let j = 0; j <= N; j += 1) {
    if (VerifyPrime(j)) {
      arr.push(j);
    }
  }
  return arr;
}

console.log(PrimeArr(23));
