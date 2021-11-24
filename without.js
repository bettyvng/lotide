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

// Assertion function
const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) 
  return(console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`));
  return (console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`));
}

const without = function(array1, array2) {
  let filteredArray = [];
  for (const element of array1) {
    if (array2.includes(element)) {      
    } else { filteredArray.push(element)};
  }
  return filteredArray;
}

// TESTS
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); 