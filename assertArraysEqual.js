const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅ Assertion passed: ${arrayA} === ${arrayB}\n`);
  } else {
    console.log(`❌ Assertion failed: ${arrayA} !== ${arrayB}\n`);
  }
};

module.exports = assertArraysEqual;