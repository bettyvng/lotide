// ASSERT ARRAYS EQUAL function
const eqArrays = function(array1, array2) {

  // Make sure the arrays have the same length
  if (array1.length !== array2.length) 
  return false;

  // Iterate over each element of both arrays and compare them
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) 
    return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) 
  return(console.log(`🛑🛑🛑  Assertion Failed: ${array1} !== ${array2}`));
  return (console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`));
};

// takeUntil function
const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else {
      break;
    }
  }
  return newArray;  
};

// TEST CASES
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);