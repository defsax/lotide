const letterPositions = require('../letterPositions.js');
const assertArraysEqual = require('../assertArraysEqual.js');


console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);