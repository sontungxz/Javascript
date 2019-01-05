function countBs(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "B") count++;
  }
  return count;
}
console.log(countBs("BBdfdsf"));

function countChar(str, char) {
  debugger;
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == char) count += 1;
  }
  return count;
}
console.log(countChar("abcwfsfsfs", "f"));
