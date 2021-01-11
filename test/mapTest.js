const map = require('../map.js');
const assert = require('chai').assert;

describe('#map', function() {
  //map test

  it('returns the first letter of each word "ground", "control", "to", "major", "tom"', function() {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'], "['g', 'c', 't', 'm', 't']");
  });

  it('doubles the array [4, 6, 34, 9, 10]', function() {
    const nums = [4, 6, 34, 9, 10];
    assert.deepEqual(map(nums, num => num * 2), [8, 12, 68, 18, 20]);
  });
});
