const assertObjectsEqual = require('../assertObjectsEqual.js');

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
