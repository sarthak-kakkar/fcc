function palindrome(str) {
  str = str.replace(/[\W_]/g, "").toLowerCase();
  return str.split("").reverse().join("") === str;
}



palindrome("eye");
