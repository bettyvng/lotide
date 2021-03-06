// Function that compares every element of both arrays
const eqArrays = function(array1, array2) {

  // Make sure the arrays have the same length
  if (array1.length !== array2.length) 
  return false;

  // Iterate over each element of both arrays and compare them
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) 
    return false;
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) 
  return(console.log(`🛑🛑🛑  Assertion Failed: ${array1} !== ${array2}`));
  return (console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`));
}

// Impletment letterPositions function
const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(' ', '');

  for (let i = 0; i < sentence.length; i++) {
    if(!results[sentence[i]])
      results[sentence[i]] = [i];
    else
      results[sentence[i]].push(i);
  }
  return results;
};

// TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);
