const findKey = require('../findKey.js');
const assert = require('chai').assert;

describe('#findKey', function() {
  //finds first key that satisfies callback
  it('returns "noma" when callback checks for x.stars === 2', function() {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), 'noma');
  });
});