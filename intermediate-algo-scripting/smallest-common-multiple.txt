function smallestCommons(arr) {
  arr.sort((x, y) => x - y);
  let itr = arr[0];
  let nums = [];
  while (itr <= arr[1]) {
    nums.push(itr);
    itr++;
  }

  let hcf = (x, y) => {
    if (y === 0) return x;
    return hcf(y, x% y);
  }

  return nums.reduce((lcm, element) => {
    return (lcm * element)/hcf(lcm, element);
  })  
}


smallestCommons([2,10]);
