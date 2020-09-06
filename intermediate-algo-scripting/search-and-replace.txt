function myReplace(str, before, after) {
  if (before.search(/[A-Z]/) === 0 || after.search(/[A-Z]/) === 0) {
      return before.search(/[A-Z]/) === 0 ? str.replace(before, after.charAt(0).toUpperCase() + after.substring(1)) : str.replace(before, after.charAt(0).toLowerCase() + after.substring(1));
    }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
