function InsertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    key = arr[i];
    var j = i - 1;
  }
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j = j - 1;
  }
  arr[j + 1] = key;
}

console.log(InsertionSort([1, 6, 3, 5, 8, 6]));

