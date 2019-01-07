/* Read File */
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("./user.json", "utf-8"));

//Ex6: reduce cont.
//1.
let arr6_1 = [];
users.reduce((name, element) => {
  name = element.first_name + " " + element.last_name;
  return arr6_1.push(name);
}, []);
// console.log(arr6_1);

// 2.
let arr6_2 = users.reduce((sumage, element) => {
  sumage = sumage + element.age;
  return sumage;
}, 0);
console.log(arr6_2);

//3.
