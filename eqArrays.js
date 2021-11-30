const assertEqual = require('../assertEqual');
const eqArrays = require("../eqArrays");

const eqArrays = function(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

module.export = eqArrays;