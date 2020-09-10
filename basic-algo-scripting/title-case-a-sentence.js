function titleCase(str) {
  let sentence = "";
  str.split(" ").forEach(each => {
    let word = each.substr(0, 1).toUpperCase() + each.substr(1, each.length-1).toLowerCase();
    sentence = sentence === "" ? sentence + word : sentence + " " + word;
  })
  return sentence; 
  /*
  Replaces ',' as well
  map(x =>
  {
    return x.substr(0, 1).toUpperCase() + x.substr(1, x.length-1).toLowerCase();
    }).toString().replace(/,/g, " ")*/;
}

titleCase("I'm a little tea pot");
