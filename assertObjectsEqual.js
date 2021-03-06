// const { builtinModules } = require('module');

// const eqArrays = function(arrayA, arrayB) {
//   console.log('\nComparing Arrays:');
//   if (arrayA.length !== arrayB.length) {
//     console.log('Arrays are not same length.');
//     return false;
//   }
  
//   for (let i = 0; i < arrayA.length; i++) {
//     if (arrayA[i] !== arrayB[i]) {
//       console.log('Elements ' + arrayA[i] + ' and ' + arrayB[i] + ' are not equal.');
//       return false;
//     }
//   }
//   return true;
// };

// const eqObjects = function(object1, object2) {

//   console.log('\nComparing Objects:');

//   let obj1Keys = Object.keys(object1);
//   let obj2Keys = Object.keys(object2);
  
//   if (obj1Keys.length !== obj2Keys.length) {
//     console.log('Objects have a different number of keys.');
//     return false;
//   }

//   for (let i of obj1Keys) {
//     if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
//       if (!eqArrays(object1[i], object2[i]))
//         return false;
//     } else if (object1[i] !== object2[i]) {
//       console.log('Value mismatch:', object1[i], object2[i]);
//       return false;
//     }
//   }
//   return true;
// };

const eqObjects = require('./eqObjects.js');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected))
    console.log(`\nObject 1: ${inspect(actual)} ===\nObject 2: ${inspect(expected)} \n\n✅ Assertion Passed ✅`);
  else
    console.log(`\nObject 1: ${inspect(actual)} ===\nObject 2: ${inspect(expected)} \n\n❌ Assertion Passed ❌`);
};

module.exports = assertObjectsEqual;