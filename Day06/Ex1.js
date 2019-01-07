/* Read File */
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("./user.json", "utf-8"));

//Ex1: forEarch

const arr1 = [];
users.forEach(function(element1) {
  let name = element1.first_name + " " + element1.last_name;
  arr1.push(name);
});
// console.log(arr1);









