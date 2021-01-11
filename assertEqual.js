const assertEqual = function(a, b) {
  if (a === b) {
    console.log(`✅ Assertion passed: ${a} === ${b}`);
    return true;
  } else {
    console.log(`❌ Assertion failed: ${a} !== ${b}`);
    return false;
  }
};

module.exports = assertEqual;