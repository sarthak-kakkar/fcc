function dropElements(arr, func) {
  let indexOfFind = arr.indexOf(arr.find(func));
  return indexOfFind !== -1 ? arr.filter((element, index) => index >= indexOfFind) : [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });
