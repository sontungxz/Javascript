/* Read File */
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("./user.json", "utf-8"));


//Ex3: map

let arr3 = [];
arr3 = users.map(x => x.first_name + " " + x.last_name);
console.log(arr3);