const assertEqual = require('../assertEqual.js');
const assert = require('chai').assert;

describe('#assertEqual', function() {
  //test, returns true or false. prints a message.
  it("returns false when comparing 'Lighthouse Labs' & 'Bootcamp'", function() {
    assert.isFalse(assertEqual('Lighthouse Labs', 'Bootcamp'));
  });

  it("returns true when comparing 1 & 1", function() {
    assert.isTrue(assertEqual(1, 1));
  });

  it("returns true when comparing 1 + 1, 2", function() {
    assert.isTrue(assertEqual(1 + 1, 2));
  });

  it("returns false when comparing 'case check' & 'Case check'", function() {
    assert.isFalse(assertEqual('case check', 'Case check'));
  });
});
