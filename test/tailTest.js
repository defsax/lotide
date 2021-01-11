const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');

//test, returns array less 'a'
console.log(tail(['a', 'b', 'c', 'd']));

//set up arrays
const words = ['Hello', 'Lighthouse', 'Labs'];
const result = tail(words);

//this will fail because we cannot directly compare two arrays
assertEqual(result, ['Lighthouse', 'Labs']);

//compass solution is hardcoded...
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');

//original array is unmodified
console.log(words);

//test: returns empty array
console.log(tail(['a']));

//test: empty array return empty array
console.log(tail([]));

