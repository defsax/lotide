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