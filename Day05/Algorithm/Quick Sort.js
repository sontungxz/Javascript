function QuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let flag = arr.pop();
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] <= flag) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return QuickSort(left).concat(flag, QuickSort(right));
}
console.log(QuickSort([1, 2, 3, 5, 9,34,546,134,67,678,52, 8, 7, 6]));
