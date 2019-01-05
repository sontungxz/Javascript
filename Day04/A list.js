function arrayToList(arr) {
  var list = null;

  for (var i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }

  return list;
}
console.log(arrayToList([10, 20]));

function listToArray(list) {
  var arr = [];

  while (list) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}
console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(value, list) {
  var pre = { value: value, rest: list };
  return pre;
}
console.log(prepend(10, prepend(20, null)));

function nth(list, num) {
  debugger;

  if (!list) {
    return undefined;
  } else if (num === 0) {
    return list.value;
  } else {
    return nth(list.rest, num - 1);
  }
}
console.log(nth(arrayToList([10, 20, 30]), 1));
