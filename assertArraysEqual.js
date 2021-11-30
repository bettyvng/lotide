const assertEqual = require('../assertEqual');
const eqArrays = require('./eqArrays');

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
};

module.exports = assertArraysEqual;
