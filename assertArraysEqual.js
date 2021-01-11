const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB))
    console.log(`✅ Assertion passed: ${arrayA} === ${arrayB}\n`);
  else
    console.log(`❌ Assertion failed: ${arrayA} !== ${arrayB}\n`);
};

// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

module.exports = assertArraysEqual;