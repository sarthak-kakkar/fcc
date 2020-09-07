function fearNotLetter(str) {
  let charCodeFound = str.split("").map(element => element.charCodeAt(0)).find((element, index, array) => index !== array.length -1 && element + 1 !== array[index+1])
  return charCodeFound ? String.fromCharCode(charCodeFound + 1) : undefined;
}

fearNotLetter("abce");
