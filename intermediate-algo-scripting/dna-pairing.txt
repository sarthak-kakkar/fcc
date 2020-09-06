function pairElement(str) {
  return str.split("").map(element => {
    if (element === 'G') return ["G", "C"]
    if (element === 'C') return ["C", "G"]
    if (element === 'A') return ["A", "T"]
    if (element === 'T') return ["T", "A"]
  });
  /*let map = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  };
  return str.split("").map(el => [el, map[el]]);*/
}

console.log(pairElement("GCG"));
