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

const without = function(source, itemsToRemove) {
  //duplicate source array
  let itemsRemoved = source.slice();
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (itemsRemoved[j] === itemsToRemove[i]) {
        itemsRemoved.splice(j, 1);
      }
    }
  }
  return itemsRemoved;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

assertArraysEqual(without([1, 2, 3, 4, 5], [2]), [1, 3, 4, 5]); // => [2, 3]
assertArraysEqual(without([1, 2, 3, 4, 5], [2, 4, 5]), [1, 3]); // => [2, 3]
