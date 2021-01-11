const takeUntil = require('../takeUntil.js');
const assert = require('chai').assert;

describe('#takeUntil', function() {
  //takeUntil test
  it('returns numbers in array until x < 0',function() {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });
  
  it('returns string until comma', function() {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data2, x => x === ','), ["I've", 'been', 'to', 'Hollywood'], 'msg');
  });
});
