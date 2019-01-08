function to(fn, endVal) {
  let count = fn();
  return () => {
    count++;
    if (count > endVal) {
      return undefined;
    }
    return fn() - 1;
  };
}
