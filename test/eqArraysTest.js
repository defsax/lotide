const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');

//tests for eqArrays.js
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false

assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true); // => false
assertEqual(eqArrays(["a", "b", "c"], ["c", "b", "a"]), true); // => false
