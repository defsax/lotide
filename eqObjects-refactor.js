const assertEqual = function(a, b) {
  if (a === b)
    console.log(`✅ Assertion passed: ${a} === ${b}`);
  else
    console.log(`❌ Assertion failed: ${a} !== ${b}`);
};

const eqArrays = function(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    return false;
  }

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  console.log(obj1Keys.length, obj2Keys.length);
  if (obj1Keys.length !== obj2Keys.length) {
    console.log('Objects have a different number of keys.');
    return false;
  }

  for (let key of Object.keys(object1)) {
    //is object1[key](aka value) an array?
    if (Array.isArray(object1[key])) {
      //check if arrays are equal
      if (!eqArrays(object1[key], object2[key])) {
        //if not, return, it is a fail
        return false;
      }
    } else if (typeof(object1[key]) === 'object') {
      //is value another object?
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      //is value a primitive?
      console.log('no match: ', object1[key], object2[key], 'returning');
      return false;
    }
  }
  return true;
};


console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects(
  { a: { y: 0, z: 1 }, b: 2 },
  { a: { z: 1 },       b: 2 })); // => false

console.log(eqObjects(
  { a: { y: 0, z: 1 }, b: 2 },
  { a: 1,              b: 2 })); // => false


// const ab = { a: "1", b: "2"};
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// const aa = { c: ["1", 5], d: ["2", 3] };
// const bb = { d: ["2", 3], c: ["1", 5] };
// assertEqual(eqObjects(aa, bb), true); // => true

// const hola = { a: [1, 2, 3], b: [3, 3, 4]};
// const hello = { a: [1, 2, 3], b:[3, 2, 4]};
// assertEqual(eqObjects(hola, hello), false);
