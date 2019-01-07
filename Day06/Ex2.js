/* Read File */
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("./user.json", "utf-8"));

//Ex2: filter
const arr2 = [];
users.filter(element2 => element2.age < 40);
console.log(arr2);
