function getIndexToIns(arr, num) {
  return arr.reduce((a, b) => 
  {
    if (num > b) a++;
    return a;
  }, 0);
}

getIndexToIns([40, 60], 50);
