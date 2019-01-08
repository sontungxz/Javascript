
function from(num) {
  let a = num;
  return function (){
    return a++;
  };
}

var index = from(0);
index(); // 0
index(); // 1
index(); // 2

console.log(index());
console.log(index());
console.log(index());
console.log(index());
