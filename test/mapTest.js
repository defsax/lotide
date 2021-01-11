const map = require('../map.js');
const assertArraysEqual = require('../assertArraysEqual.js');

const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

const nums = [4, 6, 34, 9, 10];
assertArraysEqual(map(nums, num => num * 2), [8, 12, 68, 18, 20]);