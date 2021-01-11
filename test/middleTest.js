const assert = require('chai').assert;
const middle = require('../middle.js');


describe('#middle', function() {
  it("returns an empty array if passed []", function() {
    assert.isEmpty(middle([]));
  });
  it("returns an empty array if passed [1]", function() {
    assert.isEmpty(middle([1]));
  });
  it("returns an empty array if passed [1, 2]", function() {
    assert.isEmpty(middle([1, 2]));
  });
  it("returns 2 if passed [1, 2, 3]", function() {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });
  it("returns [2, 3] if passed [1, 2, 3, 4]", function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns 3 if passed [1, 2, 3, 4, 5]", function() {
    assert.strictEqual(middle([1, 2, 3, 4, 5]), 3);
  });
  it("returns [3, 4] if passed [1, 2, 3, 4, 5, 6]", function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns 4 if passed [1, 2, 3, 4, 5, 6, 7]", function() {
    assert.strictEqual(middle([1, 2, 3, 4, 5, 6, 7]), 4);
  });
  it("returns [4, 5] if passed [1, 2, 3, 4, 5, 6, 7, 8]", function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
  it("returns 5 if passed [1, 2, 3, 4, 5, 6, 7, 8, 9]", function() {
    assert.strictEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), 5);
  });
});