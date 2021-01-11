const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅ Assertion passed: ${arrayA} === ${arrayB}\n`); 
    return true;
  } else {
    console.log(`❌ Assertion failed: ${arrayA} !== ${arrayB}\n`);
    return false;
  }
};

module.exports = assertArraysEqual;