const countLetters = require('../countLetters.js');
const assert = require('chai').assert;

describe('#countLetters', function() {
  //count each time letter occurs in string
  const result = countLetters('lighthouse in the house');

  it("'l' = 1", function() {
    assert.strictEqual(result.l, 1);
  });

  it("'i' = 2", function() {
    assert.strictEqual(result.i, 2);
  });

  it("'g' = 1", function() {
    assert.strictEqual(result.g, 1);
  });

  it("'h' = 4", function() {
    assert.strictEqual(result.h, 4);
  });

  it("'t' = 2", function() {
    assert.strictEqual(result.t, 2);
  });

  it("'o' = 2", function() {
    assert.strictEqual(result.o, 2);
  });

  it("'u' = 2", function() {
    assert.strictEqual(result.u, 2);
  });

  it("'s' = 2", function() {
    assert.strictEqual(result.s, 2);
  });

  it("'e' = 3", function() {
    assert.strictEqual(result.e, 3);
  });

  it("'n' = 1", function() {
    assert.strictEqual(result.n, 1);
  });
});