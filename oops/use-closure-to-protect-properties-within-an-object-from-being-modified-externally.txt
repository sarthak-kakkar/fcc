function Bird() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  }
}

/*
function Bird() {
  let hatchedEgg = 10; // private variable

  //publicly available method that a bird object can use
  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10

Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. 

In JavaScript, a function always has access to the context in which it was created. This is called closure.

*/