const assertEqual = function(a, b) {
  if (a === b)
    console.log(`✅ Assertion passed: ${a} === ${b}\n`);
  else
    console.log(`❌ Assertion failed: ${a} !== ${b}\n`);
};

const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    console.log('Arrays are not same length.');
    return false;
  }
  
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      console.log('Elements ' + arrayA[i] + ' and ' + arrayB[i] + ' are not equal.');
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false

assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true); // => false
assertEqual(eqArrays(["a", "b", "c"], ["c", "b", "a"]), true); // => false