var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstName = "";
  let lastName = "";

  firstName = firstAndLast.split(" ")[0];
  lastName = firstAndLast.split(" ")[1];
  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
  this.getFullName = () => firstName + " " + lastName;
  this.setFirstName = fName => firstName = fName;
  this.setLastName = lName => lastName = lName;
  this.setFullName = fnL => {
    firstName = fnL.split(" ")[0];
    lastName = fnL.split(" ")[1];
    }
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
