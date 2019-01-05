function hotelBookingPossible(arrival, depature, rooms) {
  // 1. chuyen ngay den thanh [a1, 1], ... [an , 1]
  // 2. chuyen ngay di thanh [d1, -1], ... [dn, -1]
  // 3. cap 2 manh lai va sort
  // 4. duyet tung phan tu tinh tong cua index 1 s
  // 5. s > rooms return false
  // 6. return true
  if (rooms >= arrival.length) {
    return true;
  }

  const an = arrival.map(a => [a, 1]);
  const dn = depature.map(d => [d, -1]);

  const merge = [].concat(an).concat(dn);

  merge.sort(function(a, b) {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  let k = 0;
  for (const i of merge) {
    k += i[1];

    if (k > rooms) {
      return false;
    }
  }

  return true;
}

// 1 truong hop dat biet la k >= length
// k < length
// 1. i, j = 0, room = 0
// den[i] < di[j] can phong, tang bien dem room + 1, tang i + 1
// den[i] >= di[j], room -= 1; j += 1
//
hotelBookingPossible([1, 3, 5], [2, 6, 8], 1);
