function sumAll(arr) {
  const f = srtdArr => {
    let sum = 0;
    while(srtdArr[1] >= srtdArr[0]) {
      sum += srtdArr[0];
      ++srtdArr[0];
    }
    return sum;
  }
  return f(arr.slice().sort((x, y) => x - y));
}

sumAll([1, 4]);
