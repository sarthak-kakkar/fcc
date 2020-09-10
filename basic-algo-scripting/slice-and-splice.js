function frankenSplice(arr1, arr2, n) {
  let muxed = arr2.slice();
  muxed.splice(n, 0, ...arr1);
  return muxed;
  //arr2.slice().splice(n, 0, ...arr1) would not work as splice() returns the array containing elements removed, or empty array if none were removed.
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
