function diffArray(arr1, arr2) {
  var newArr = arr1.filter(element => arr2.indexOf(element) === -1).concat(arr2.filter(element => arr1.indexOf(element) === -1));
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
