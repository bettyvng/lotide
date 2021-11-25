// assertEqual FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Function that compares arrays
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

// Returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  
  // Compares objects length
  if (array1.length !== array2.length) return false;
  for (let key of array1) {

    // use eqArrays function if values are arrays
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      return (eqArrays(object1[key], object2[key]));
// If they are not arrays assumes the values are primitives and compare them
    } else if (object1[key] !== object2[key]) return false;
}
return true;
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false