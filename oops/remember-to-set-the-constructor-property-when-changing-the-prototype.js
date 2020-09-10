function Dog(name) {
  this.name = name;
}

//There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property!
// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

let doggo = new Dog();

console.log(doggo.constructor)
