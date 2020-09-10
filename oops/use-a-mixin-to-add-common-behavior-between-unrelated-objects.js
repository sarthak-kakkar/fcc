let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

let glideMixin = function(glider) {
  glider.glide = function() {
    console.log("Can glide now.");
    }
}

glideMixin(bird);
glideMixin(boat);

/*
Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.
*/