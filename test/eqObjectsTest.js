const eqObjects = require('../eqObjects.js');
const assert = require('chai').assert;

describe('#eqObjects', function() {
  //compare two objects
  
  const ab = { a: "1", b: "2"};
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  const aa = { c: ["1", 5], d: ["2", 3] };
  const bb = { d: ["2", 3], c: ["1", 5] };
  const hola = { a: [1, 2, 3], b: [3, 3, 4]};
  const hello = { a: [1, 2, 3], b:[3, 2, 4]};

  it('returns true given OBJ1 = { a: "1", b: "2"} OBJ2 = { b: "2", a: "1" }', function() {
    assert.isTrue(eqObjects(ab, ba));
  });

  it('returns false given OBJ1 = { a: "1", b: "2"}, OBJ2 = { a: "1", b: "2", c: "3" }', function() {
    assert.isFalse(eqObjects(ab, abc));
  });

  it('returns true given OBJ1 = { c: "1", d: ["2", 3] }, OBJ2 = { d: ["2", 3], c: "1" }', function() {
    assert.isTrue(eqObjects(cd, dc));
  });

  it('returns false given OBJ1 = { c: "1", d: ["2", 3] }, OBJ2 = { c: "1", d: ["2", 3, 4] }', function() {
    assert.isFalse(eqObjects(cd, cd2));
  });

  it('returns true given OBJ1 = { c: ["1", 5], d: ["2", 3] }, OBJ2 = { d: ["2", 3], c: ["1", 5] }', function() {
    assert.isTrue(eqObjects(aa, bb));
  });

  it('returns false given OBJ1 = { a: [1, 2, 3], b: [3, 3, 4]}, OBJ2 = { a: [1, 2, 3], b:[3, 2, 4]}', function() {
    assert.isFalse(eqObjects(hola, hello));
  });
});