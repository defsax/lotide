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
    console.log(`❌ Assertion failed: ${arrayB} !== ${arrayB}\n`);
};