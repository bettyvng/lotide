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

module.exports = middle;