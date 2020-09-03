// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList, bookName) {
  let bo = bookList.slice();
  bo.push(bookName);
  return bo;
  // Change code above this line
}

// Change code below this line
function remove (bookList, bookName) {
  return bookList.indexOf(bookName) !== -1 ? 
    (function () {
      let bo = bookList.slice();
      bo.splice(bookList.indexOf(bookName), 1);
      return bo;
    })() : 
    (function(){
      return bookList;
    })();

    // Change code above this line
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
