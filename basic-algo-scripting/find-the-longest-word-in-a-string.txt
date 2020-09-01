function findLongestWordLength(str) {
  let strLen = 0;
  // Level of detailing/biz requirement
  //If the sentences have punctuation a regex needs to be used to split for words, like str.match(/\b(\w+)\b/g) this removes full-stop at the end but splits words like 'won't' into 'won' & 't'.  
  str.split(" ").forEach(x => strLen = x.length > strLen ? x.length : strLen);
  return strLen;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
