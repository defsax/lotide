const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    console.log('Arrays are not same length.');
    return false;
  }

  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      console.log('Elements ' + arrayA[i] + ' and ' + arrayB[i] + ' are not equal or are different types.');
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB))
    console.log(`✅ Assertion passed: ${arrayA} === ${arrayB}\n`);
  else
    console.log(`❌ Assertion failed: ${arrayA} !== ${arrayB}\n`);
};

const flatten = function(flatArr, unsortedArr) {
  for (let i of unsortedArr) {
    if (typeof(i) === 'object')
      flatten(flatArr, i);
    else
      flatArr.push(i);
  }
  return flatArr;
};

let flattenedArray = [];
let unflattenedArray = [1, 2, [3, 4], 5, [6], [7, 8, 9, [10, 11, 12, [13, 14]], [15, 15.5], 16, 17]];

assertArraysEqual(flatten(flattenedArray, unflattenedArray), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

flattenedArray = [];
unflattenedArray = [1, 2, [3, 4], 5, [6], [7, 8, 9, [10, 11, 12, [13, 14]], [15], 16, 17]];

assertArraysEqual(flatten(flattenedArray, unflattenedArray), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
