function uniteUnique(arr) {
  let arrs = [...arguments];
  let uniques = []
  arrs.forEach(arrElement => {
    for(let number in arrElement) {
      if (uniques.indexOf(arrElement[number]) !== -1) continue;
      else uniques.push(arrElement[number])
    }
  });
  return uniques;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
