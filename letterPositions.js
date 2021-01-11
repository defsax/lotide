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

const letterPositions = function(sentence) {
  sentence = sentence.split(" ").join("");
  let results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);


