let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();

/*

Note that you have an immediately invoked function expression (IIFE) that returns an object funModule. 
This returned object contains all of the mixin behaviors as properties of the object. 
The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. 
Here is an example using it:

funModule.isCuteMixin(anyObj);
anyObj.isCute();

*/