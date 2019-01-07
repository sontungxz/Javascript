/* Read File */
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("./user.json", "utf-8"));

// Ex4: Map cont.
function toUpperCamelCase(string) {
  return string
    .toLowerCase()
    .split("-")
    .map(it => it.charAt(0).toUpperCase() + it.substr(1))
    .join("");
}
let arr4 = [];
arr4 = users.map(element => {});

console.log(arr4);