function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let iterator in usersObj) {
    if (usersObj[iterator].online === true) 
      count++;
  }
  return count;
  // Only change code above this line
}
