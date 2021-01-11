const assertEqual = function(a, b) {
  if (a === b)
    console.log(`✅ Assertion passed: ${a} === ${b}`);
  else
    console.log(`❌ Assertion failed: ${a} !== ${b}`);
};

const findKeyByValue = function(obj, val) {
  for (let i in obj) {
    if (obj[i] === val)
      return i;
  }
  return undefined;
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
