const letterPositions = require('../letterPositions.js');
const assert = require('chai').assert;

describe('#letterPositions', function() {
  //test, returns an object
  it("returns an object with { h: [0], e: [1], l: [2, 3], o: [4] }", function() {
    assert.deepEqual(letterPositions('hello'), { h: [0], e: [1], l: [2, 3], o: [4] });
  });

  it("returns [0] when accessing at .h", function() {
    assert.deepEqual(letterPositions('hello').h, [0]);
  });

  it("returns [1] when accessing at .e", function() {
    assert.deepEqual(letterPositions('hello').h, [0]);
  });

  it("returns [2, 3] when accessing at .l", function() {
    assert.deepEqual(letterPositions('hello').h, [0]);
  });

  it("returns [4] when accessing at .o", function() {
    assert.deepEqual(letterPositions('hello').h, [0]);
  });

});