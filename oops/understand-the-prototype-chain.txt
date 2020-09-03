function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

//The hasOwnProperty method is defined in Object.prototype, which can be accessed by Dog.prototype, which can then be accessed by beagle. This is an example of the prototype chain. In this prototype chain, Dog is the supertype for beagle, while beagle is the subtype. Object is a supertype for both Dog and beagle. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method
