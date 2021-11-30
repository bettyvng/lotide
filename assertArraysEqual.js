const eqArrays = require('./eqArrays');

// Function that compares every element of both arrays
const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`✅ ✅ ✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;
