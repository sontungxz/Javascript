function merging(i1, i2) {
  return [Math.min(i1[0], i2[0]), Math.max(i1[1], i2[1])];
}

function isOverlap(i1, i2) {
  return !(i1[1] < i2[0] || i1[0] > i2[1]);
}

function Merge(baseIntervals, mergeInterval) {
  var result = [];
  var isMerged = false;

  debugger;

  if (mergeInterval[1] < baseIntervals[0][0]) {
    baseIntervals.unshift(mergeInterval);
    return baseIntervals;
  } else if (mergeInterval[0] > baseIntervals[baseIntervals.length - 1][1]) {
    baseIntervals.push(mergeInterval);
    return baseIntervals;
  }

  for (var i = 0; i < baseIntervals.length; i++) {
    var currentInterval = baseIntervals[i];

    if (isOverlap(currentInterval, mergeInterval)) {
      mergeInterval = merging(currentInterval, mergeInterval);
      isMerged = true;
    } else {
      if (isMerged) {
        result.push(mergeInterval);
        isMerged = false;
      }

      result.push(currentInterval);
    }

    if (isMerged) {
      result.push(mergeInterval);
    }
  }
  return result;
}
// test code

console.log(Merge([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 9]));
