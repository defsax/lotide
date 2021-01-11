const eqArrays = require('../eqArrays.js');
const assert = require('chai').assert;

describe('#eqArrays', function() {
  //compare two arrays
  
  it("returns true given [1, 2, 3], [1, 2, 3]", function() {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  
  it("returns false given [1, 2, 3], [3, 2, 1]", function() {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  
  it("returns true given ['1', '2', '3'], ['1', '2', '3']", function() {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });
  
  it("returns false given ['1', '2', '3'], ['1', '2', 3]", function() {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });
  
  it("returns true given ['a', 'b', 'c'], ['a', 'b', 'c']", function() {
    assert.isTrue(eqArrays(["a", "b", "c"], ["a", "b", "c"]));
  });
  
  it("returns false given ['a', 'b', 'c'], ['c', 'b', 'a']", function() {
    assert.isFalse(eqArrays(["a", "b", "c"], ["c", "b", "a"]));
  });
});


