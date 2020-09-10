function bouncer(arr) {
  let bounced = [];
  arr.forEach(x => {
    if (!!x) bounced.push(x);
  })
  return bounced;
}

bouncer([7, "ate", "", false, 9]);
