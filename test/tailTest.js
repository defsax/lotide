const assert = require('chai').assert;
const tail = require('../tail.js');

describe('#tail', function() {
  //test, returns array less 'a'
  it("returns ['b', 'c', 'd'] when passed ['a', 'b', 'c', 'd']", function() {
    assert.deepEqual(tail(['a', 'b', 'c', 'd']), ['b', 'c', 'd']);
  });

  it("returns ['Lighthouse', 'Labs'] when passed ['Hello', 'Lighthouse', 'Labs']", function() {
    //set up arrays
    const words = ['Hello', 'Lighthouse', 'Labs'];
    const result = tail(words);
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });
  
  it("returns length of 3 when passed  ['Hello', 'Lighthouse', 'Labs', 'Bootcamp']", function() {
    const words = ['Hello', 'Lighthouse', 'Labs', 'Bootcamp'];
    const result = tail(words);
    
    assert.lengthOf(result, 3, 'array has a length of 3');
  });

  it("returns 'Lighthouse' when accessing 1st element of results", function() {
    const words = ['Hello', 'Lighthouse', 'Labs', 'Bootcamp'];
    const result = tail(words);

    assert.strictEqual(result[0], 'Lighthouse');
  });


  it("returns 'Labs' when accessing 2nd element of results", function() {
    const words = ['Hello', 'Lighthouse', 'Labs', 'Bootcamp'];
    const result = tail(words);

    assert.strictEqual(result[1], 'Labs');
  });

  it("returns an empty array when passed ['a']", function() {
    //test: returns empty array
    assert.isEmpty(tail(['a']));
  });
  
  it("returns an empty array when passed []", function() {
    //test: empty array return empty array
    assert.isEmpty(tail([]));
  });
});



