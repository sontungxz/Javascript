describe("Set Matrix to Zeros", function() {
  it("Chuyen matrix [[1, 0, 1], [1, 1, 1], [1, 1, 1]] thanh [[0, 0, 0], [1, 0, 1], [1, 0, 1]]", function() {
    expect([[0, 0, 0], [1, 0, 1], [1, 0, 1]]).toEqual(
      setZeros([[1, 0, 1], [1, 1, 1], [1, 1, 1]])
    );
  });

  it("Chuyen matrix [[1, 0], [1, 1]] thanh [[0, 0], [1, 0]]", function() {
    expect([[0, 0], [1, 0]]).toEqual(setZeros([[1, 0], [1, 1]]));
  });

  it("Chuyen matrix [[0]] thanh [[0]]", function() {
    expect([[0]]).toEqual(setZeros([[0]]));
  });

  it("Chuyen matrix [[1]] thanh [[1]]", function() {
    expect([[1]]).toEqual(setZeros([[1]]));
  });

  it("Chuyen matrix [[]] thanh [[]]", function() {
    expect([[]]).toEqual(setZeros([[]]));
  });
});

describe("Largest Number", function() {
  it("Cho mang [3, 30, 34, 5, 9] sap ra thanh so lon nhat co the: 9534330", function() {
    expect("9534330").toEqual(largestNumber([3, 30, 34, 5, 9]));
  });
  it("Cho mang [9, 99, 98, 998, 9997] sap ra thanh so lon nhat co the: 999999799898", function() {
    expect("999999799898").toEqual(largestNumber([9, 99, 98, 998, 9997]));
  });
  it("Cho mang [1, 12, 123] sap ra thanh so lon nhat co the: 123121", function() {
    expect("123121").toEqual(largestNumber([1, 12, 123]));
  });
  it("Cho mang [1, 12, 123, 1234] sap ra thanh so lon nhat co the: 1234123121", function() {
    expect("1234123121").toEqual(largestNumber([1, 12, 123, 1234]));
  });
  it("Cho mang [1, 2, 3, 4] sap ra thanh so lon nhat co the: 4321", function() {
    expect("4321").toEqual(largestNumber([1, 2, 3, 4]));
  });
});

describe("Merge Sort", function() {
  it("Cho mang [1, 3, 4, 5] tra ve mang da sap xep: [1, 3, 4, 5]", function() {
    expect([1, 3, 4, 5]).toEqual(MergeSort([1, 3, 4, 5]));
  });

  it("Cho mang [5, 3, 4, 1, 2] tra ve mang da sap xep: [1, 2, 3, 4, 5]", function() {
    expect([1, 2, 3, 4, 5]).toEqual(MergeSort([1, 2, 3, 4, 5]));
  });

  it("Cho mang [4, 1, 2] tra ve mang da sap xep: [1, 2, 4]", function() {
    expect([1, 2, 4]).toEqual(MergeSort([4, 1, 2]));
  });

  it("Cho mang [2, 1] tra ve mang da sap xep: [1, 2]", function() {
    expect([1, 2]).toEqual(MergeSort([2, 1]));
  });

  it("Cho mang [1] tra ve mang da sap xep: [1]", function() {
    expect([1]).toEqual(MergeSort([1]));
  });
});
