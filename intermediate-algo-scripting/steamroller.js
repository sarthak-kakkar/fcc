function steamrollArray(arr) {
  let flatArr = [];
  let rollOnIt = (element, acc) => {
    for (let itr in element) {
    if(Array.isArray(element[itr])) {
      rollOnIt(element[itr], acc)
    } else {
      acc.push(element[itr])
    }
  }
  return acc;
  }
  return rollOnIt(arr, flatArr);
}

steamrollArray([1, [2], [3, [[4]]]]);
