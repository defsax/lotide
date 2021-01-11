const eqObjects = require('../eqObjects-refactor.js');
const assertEqual = require('../assertEqual.js');


console.log(eqObjects(
  { a: { z: 1 }, b: 2 },
  { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects(
  { a: { y: 0, z: 1 }, b: 2 },
  { a: { z: 1 },       b: 2 })); // => false

console.log(eqObjects(
  { a: { y: 0, z: 1 }, b: 2 },
  { a: 1,              b: 2 })); // => false

console.log(eqObjects(
  { a: { y: 0, z: 1 }, b: { v: { u: 1}, w: 3, x: 4}},
  { a: { y: 0, z: 1 }, b: { v: { u: 1, t: 12}, w: 3, x: 4}})); // => true


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

const hola = { a: [1, 2, 3], b: [3, 3, 4]};
const hello = { a: [1, 2, 3], b:[3, 2, 4]};
assertEqual(eqObjects(hola, hello), false);
