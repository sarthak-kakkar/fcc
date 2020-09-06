function translatePigLatin(str) {
  let indexOfVowel = str.search(/[aeiou]/g); 
  if (indexOfVowel !== -1) {
    if (indexOfVowel === 0)
      return str + "way";
    else return str.substring(indexOfVowel) +str.substring(0, indexOfVowel) + "ay";
  }
  return str + "ay"; 
  /*return indexOfVowel === 0 ? str + "way" : indexOfVowel === -1 ? str + "ay" : str.substring(indexOfVowel) +str.substring(0, indexOfVowel) + "ay";*/
}

translatePigLatin("consonant");
