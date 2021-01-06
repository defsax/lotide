const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    console.log('Arrays are not same length.');
    return false;
  }
  
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      console.log('Elements ' + arrayA[i] + ' and ' + arrayB[i] + ' are not equal.');
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {

  console.log('\nComparing Objects:');

  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  
  if (obj1Keys.length !== obj2Keys.length) {
    console.log('Objects have a different number of keys.\n');
    return false;
  }

  for (let i of obj1Keys) {
    if (Array.isArray(object1[i]) && Array.isArray(object2[i]))
      return eqArrays(object1[i], object2[i]);
    else if (object1[i] !== object2[i]) {
      console.log('Value mismatch:', object1[i], object2[i], '\n');
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected))
    console.log('\nObject 1:', actual, '\n\t\t===\nObject 2:' , expected, '\n\n✅ Assertion Passed ✅');
  else
    console.log('\nObject 1:', actual, '\n\t\t!==\nObject 2:' , expected, '\n\n❌ Assertion Failed ❌');
};

const obj1 = {
  firstName: 'John',
  lastName: 'Smith'
};

const obj2 = {
  firstName: 'John',
  lastName: 'Smith',
  age: 43
};

const obj3 = {
  firstName: 'John',
  lastName: 'Smart'
};

const obj4 = {
  firstName: 'John',
  lastName: 'Smith'
};

const obj5 = {
  firstName: 'John',
  lastName: 'Smith',
  people: [2, 4]
};

const obj6 = {
  firstName: 'John',
  lastName: 'Smith',
  people: [2, 5]
};


assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj1, obj3);
assertObjectsEqual(obj1, obj4);
assertObjectsEqual(obj6, obj5);
