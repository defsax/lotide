const assertArraysEqual = require('../assertArraysEqual.js');
const assert = require('chai').assert;

describe('#assertArraysEqual', function() {
  //test, returns true or false. prints a message.
  it("returns true when comparing [1, 2, 3], [1, 2, 3]", function() {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it("returns false when comparing [1, 2, 3], [3, 2, 1]", function() {
    assert.isFalse(assertArraysEqual([1, 2, 3], [3, 2, 1]));
  });

  it("returns true when comparing ['1', '2', '3'], ['1', '2', '3']", function() {
    assert.isTrue(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']));
  });

  it("returns false when comparing ['1', '2', '3'], ['1', '2', 3]", function() {
    assert.isFalse(assertArraysEqual(['1', '2', '3'], ['1', '2', 3]));
  });
});