function chunkArrayInGroups(arr, size) {
  let counter = 0;
  let chunks = [];
  while (counter < arr.length) {
    chunks.push(arr.slice(counter, counter = counter + size));
  }
  return chunks;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
