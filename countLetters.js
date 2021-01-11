const assertEqual = function(a, b) {
  if (a === b)
    console.log(`✅ Assertion passed: ${a} === ${b}`);
  else
    console.log(`❌ Assertion failed: ${a} !== ${b}`);
};

const countLetters = function(sentence) {
  sentence = sentence.split(" ").join("");
  let count = {};

  for (let i of sentence) {
    if (count[i]) {
      count[i] += 1;
    } else {
      count[i] = 1;
    }
  }
  return count;
};

module.exports = countLetters;

assertEqual(countLetters('lighthouse in the house').l, 1);
assertEqual(countLetters('lighthouse in the house').i, 2);
assertEqual(countLetters('lighthouse in the house').g, 1);
assertEqual(countLetters('lighthouse in the house').h, 4);
assertEqual(countLetters('lighthouse in the house').t, 2);
assertEqual(countLetters('lighthouse in the house').o, 2);
assertEqual(countLetters('lighthouse in the house').u, 2);
assertEqual(countLetters('lighthouse in the house').s, 2);
assertEqual(countLetters('lighthouse in the house').e, 3);
assertEqual(countLetters('lighthouse in the house').n, 1);