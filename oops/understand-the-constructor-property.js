function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
	//Since the constructor property can be overwritten, it’s generally better to use the instanceof method to check the type of an object.
    return candidate.constructor === Dog;
}
