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

const middle = function (array) {
  let returnArray = [];
  let midpoint = Math.floor(array.length/2);

  if (array.length <= 2) {
    return returnArray;

  } else if (array.length % 2 === 0)  {
    returnArray.unshift(array[midpoint]);
    returnArray.unshift(array[midpoint - 1]);
    return returnArray;

  } else {
    returnArray.unshift(array[midpoint]);
    return returnArray;
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([2, 2]), []); 