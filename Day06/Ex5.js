/* Read File */
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("./user.json", "utf-8"));

//Ex5: reduce
let arr5 = users.reduce((acc, element) => {
    acc = acc + element.age;
    return acc;
  }, 0);
  // console.log(arr5);

  