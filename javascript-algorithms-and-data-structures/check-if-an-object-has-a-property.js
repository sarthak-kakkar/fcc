let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line
  return obj.hasOwnProperty('Alan') &&
          'Jeff' in obj && 
          obj.hasOwnProperty('Sarah') &&
          'Ryan' in obj
  // Only change code above this line
}

console.log(isEveryoneHere(users));
