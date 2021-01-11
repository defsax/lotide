const assertArraysEqual = require('../assertArraysEqual.js');
const flatten = require('../flatten.js');

let flattenedArray = [];
let unflattenedArray = [1, 2, [3, 4], 5, [6], [7, 8, 9, [10, 11, 12, [13, 14]], [15, 15.5], 16, 17]];

assertArraysEqual(flatten(flattenedArray, unflattenedArray), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

flattenedArray = [];
unflattenedArray = [1, 2, [3, 4], 5, [6], [7, 8, 9, [10, 11, 12, [13, 14]], [15], 16, 17]];

assertArraysEqual(flatten(flattenedArray, unflattenedArray), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
