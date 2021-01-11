//countOnlyTest.js
const countOnly = require('../countOnly.js');
const assert = require('chai').assert;

describe('#countOnly', function() {
  //test, returns array less 'a'
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("counts 'Jason' once", function() {
    assert.strictEqual(result['Jason'], 1);
  });

  it("counts 'Fang' twice", function() {
    assert.strictEqual(result['Fang'], 2);
  });
  
  it("'Karima' is undefined because not in array", function() {
    assert.strictEqual(result['Karima'], undefined);
  });

  it("doesn't count Agouhanna (undefined)", function() {
    assert.strictEqual(result['Agouhanna'], undefined);
  });
});