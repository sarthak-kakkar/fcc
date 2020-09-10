function reverseString(str) {
  return [...str].reduceRight((x, y) => x+y);
}

reverseString("hello");
