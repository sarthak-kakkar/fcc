function convertHTML(str) {
  let map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;" 
  };
  return str.split("").map(element => {
    if (map.hasOwnProperty(element))
      return map[element];
    return element;  
  }).join("");
}

convertHTML("Dolce & Gabbana");
