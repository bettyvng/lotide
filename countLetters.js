// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string)  {
  const result = {};

  for (const letter of string) {
    if (letter !== " ")
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
  }
  return result;
};

// TEST CODE
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("test"));
console.log(countLetters("testing again")); 