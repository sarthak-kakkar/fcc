function addTogether() {
  let argsArray = [...arguments];
  let isValid = num => Number.isInteger(num);
  let curriedFunc = num => isValid(num) ? num + argsArray[0] : undefined;
  
  if (!argsArray.every(element => isValid(element))) {
    return undefined;
  }
   
  return argsArray.length === 1 ? curriedFunc : argsArray.reduce((acc, element) => acc+element);
}

addTogether(2,3);
