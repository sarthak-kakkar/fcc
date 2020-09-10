var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  return globalArray.slice().sort((a,b) => a-b);
  // Only change code above this line
}
nonMutatingSort(globalArray);

/*
A side effect of the sort method is that it changes the order of the elements in the original array. 
In other words, it mutates the array in place.
*/