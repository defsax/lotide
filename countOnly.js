const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (let i of allItems) {
    if (itemsToCount[i]) {
      if (results[i]) {
        results[i] += 1;
      } else {
        results[i] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;
