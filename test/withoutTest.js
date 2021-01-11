const without = require('../without.js');
const assertArraysEqual = require('../assertArraysEqual.js');

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

assertArraysEqual(without([1, 2, 3, 4, 5], [2]), [1, 3, 4, 5]); // => [2, 3]
assertArraysEqual(without([1, 2, 3, 4, 5], [2, 4, 5]), [1, 3]); // => [2, 3]
