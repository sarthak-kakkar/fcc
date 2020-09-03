function mutation(arr) {
  let a1 = [...arr[0].toLowerCase()];
  let a2 = [...arr[1].toLowerCase()];
  return a2.every(x => a1.indexOf(x) !== -1);
}

mutation(["hello", "hey"]);
