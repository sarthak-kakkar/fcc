function destroyer(arr) {
  var arr2 = [...arguments];
  return arr.filter(element => arr2.indexOf(element) === -1);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
