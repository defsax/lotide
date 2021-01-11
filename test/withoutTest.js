const without = require('../without.js');
const assert = require('chai').assert;

describe('#without', function() {
  //without test

  it('without doesn\'t mutate array', function() {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]); // no need to capture return value for this test case
    // Make sure the original array was not altered by the without function
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
  
  it('removes 1 from [1, 2, 3]', function() {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
  });
  
  it('removes only type matching elements: ["1", "2", "3"], [1, 2, "3"] = ["1", "2"]', function() {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
  });

  it('removes elements from middle of the array', function() {
    assert.deepEqual(without([1, 2, 3, 4, 5], [2]), [1, 3, 4, 5]); // => [2, 3]
  });
  
  it('removes multiple elements from different positions in array', function() {
    assert.deepEqual(without([1, 2, 3, 4, 5], [2, 4, 5]), [1, 3]); // => [2, 3]
  });
});