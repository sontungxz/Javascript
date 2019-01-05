function MergeSort(arr) {

  if (arr.length <= 1) {
    return arr;
  }

  let m = Math.ceil(arr.length / 2);
  let left = arr.slice(0, m);
  let right = arr.slice(m);

  return merging(MergeSort(left), MergeSort(right));
}

function merging(left, right) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return res.concat(left.slice(i)).concat(right.slice(j));
}
console.log(MergeSort([5, 3, 4, 1, 2]));
