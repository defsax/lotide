const assertEqual = function(a, b) {
  if (a === b)
    console.log(`✅ Assertion passed: ${a} === ${b}`);
  else
    console.log(`❌ Assertion failed: ${a} !== ${b}`);
};

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
    console.log('object1[key]', object1[key]);
    console.log('object2[key]', object2[key]);
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key]))
        return false;
    } else if (object1[key] !== object2[key]) {
      console.log('no match: ', object1[key], object2[key], 'returning');
      return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const aa = { c: ["1", 5], d: ["2", 3] };
const bb = { d: ["2", 3], c: ["1", 5] };
assertEqual(eqObjects(aa, bb), true); // => true

const aaa = { a: [1, 2, 3,], b: [3, 3, 4]};
const bbb = { a: [1, 2, 3,], b: [3, 2, 4]};
assertEqual(eqObjects(aaa, bbb), false); // => true
