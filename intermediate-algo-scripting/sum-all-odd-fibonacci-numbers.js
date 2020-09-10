function sumFibs(num) {
  let compsum = 2;
  let sum = 1;
  let itr = 1;
  while (itr <= num) {
    if (itr%2 !== 0) sum += itr;
    compsum += itr;
    itr = compsum - itr;
  }
  return sum;
}

console.log(sumFibs(4));
