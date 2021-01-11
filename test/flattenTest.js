const flatten = require('../flatten.js');
const assert = require('chai').assert;

describe('#flatten', function() {
  //finds first key that satisfies callback
  it('returns flat array from [1, 2, [3, 4], 5, [6], [7, 8, 9, [10, 11, 12, [13, 14]], [15, 15.5], 16, 17]]', function() {
    
    let unflattenedArray = [1, 2, [3, 4], 5, [6], [7, 8, 9, [10, 11, 12, [13, 14]], [15, 15.5], 16, 17]];

    assert.deepEqual(flatten([], unflattenedArray), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15.5, 16, 17]);
  });

  it('returns flat array from [[10], 1, 2, [3, 4], 5, [6], [7, 8, 9, [10, 11, 12, [13, 14]], [15], 16, 17]]', function() {

    let unflattenedArray = [[10], 1, 2, [3, 4], 5, [6], [7, 8, 9, [10, 11, 12, [13, 14]], [15], 16, 17]];

    assert.deepEqual(flatten([], unflattenedArray), [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
  });
});