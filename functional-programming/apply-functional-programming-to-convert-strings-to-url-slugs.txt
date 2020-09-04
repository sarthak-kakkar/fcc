// Only change code below this line
function urlSlug(title) {
  return title.trim().split(/\s+/g).map(element => element.toLowerCase()).join("-");
}
// Only change code above this line
