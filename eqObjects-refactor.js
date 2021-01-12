const eqArrays = require('./eqArrays.js');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //check for numbers of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log('Objects have a different number of keys.');
    return false;
  }

  for (let key of Object.keys(object1)) {
    //check for array first, since array is also an object
    if (Array.isArray(object1[key])) {
      //is object1[key](aka value) an array?

      //check if arrays are equal
      if (!eqArrays(object1[key], object2[key])) {
        //if not, return, it is a fail
        return false;
      }
    } else if (typeof(object1[key]) === 'object') {
      //is value another object?
      console.log('key\'s value is another object:', object1[key]);
      if (!eqObjects(object1[key], object2[key]))
        return false;
    } else if (object1[key] !== object2[key]) {
      //is value a primitive?
      console.log('no match: ', object1[key], object2[key], 'returning');
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
