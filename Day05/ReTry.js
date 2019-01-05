class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}
/**dùng vòng while nếu primitiveMultiply() throw lỗi thì chạy lại hàm đến khi
 * trả giá trị thì dừng
 */
function reliableMultiply(a, b) {
  // Your code here.

  try {
    return primitiveMultiply(a, b);
  } catch (e) {
    return reliableMultiply(a, b);
  }
}

console.log(reliableMultiply(8, 8));

// → 64
