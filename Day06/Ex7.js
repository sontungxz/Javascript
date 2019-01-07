/* Read File */
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("./user.json", "utf-8"));

function ImplementMap(arr, fn) {
  temp = [];
  for (let i of arr) {
    i = fn(i);
    temp.push(i);
  }
  return temp;
}
function plus1(x) {
  return (res = x + 1);
}

let arr = [1, 2, 3];
console.log(ImplementMap(arr, plus1));
