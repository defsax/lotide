const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  
  if (obj1Keys.length !== obj2Keys.length) {
    console.log('Objects have a different number of keys.');
    return false;
  }

  for (let key of obj1Keys) {
    //check if arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //check if arrays are equal
      if (!eqArrays(object1[key], object2[key])) {
        //if not, return, it is a fail
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      //if not arrays, they are primitives
      console.log('no match: ', object1[key], object2[key], 'returning');
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;