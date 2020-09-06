function spinalCase(str) {
  return str.split(/[\s_]+|(?=[A-Z])/g).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');