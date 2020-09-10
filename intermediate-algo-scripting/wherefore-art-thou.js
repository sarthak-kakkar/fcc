function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  arr = collection.filter(element => {
    let flag = true;
    for (let property in element, source) {
      if (element[property] !== source[property]) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      return element;
    }
  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
