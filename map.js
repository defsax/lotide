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



const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

const nums = [4, 6, 34, 9, 10];
assertArraysEqual(map(nums, num => num * 2), [8, 12, 68, 18, 20]);