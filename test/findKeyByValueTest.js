const findKeyByValue = require('../findKeyByValue.js');
const assert = require('chai').assert;

describe('#findKeyByValue', function() {
  //find key by value
  const bestTVShowsByGenre = {
    // eslint-disable-next-line camelcase
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('returns "drama" when passed shows and "The Wire"', function() {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it('returns "undefined" when passed shows and "That \'70s Show"', function() {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it('returns "sci_fi" when passed shows and "The Expanse"', function() {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });
});