function range(start, end, step) {
  let array = [];

  if (!step) {
    step = 1;
  }

  if (step < 0) {
    for (var i = start; i >= end; i += step) {
      array.push(i);
    }
  } else if (step > 0) {
    for (var j = start; j <= end; j += step) {
      array.push(j);
    }
  }
  return array;
}

function sum(range) {
  var arraySum = 0;

  for (var i = 0; i < range.length; i++) {
    arraySum += range[i];
  }
  return arraySum;
}
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
