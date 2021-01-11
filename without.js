const without = function(source, itemsToRemove) {
  //duplicate source array
  let itemsRemoved = source.slice();
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (itemsRemoved[j] === itemsToRemove[i]) {
        itemsRemoved.splice(j, 1);
      }
    }
  }
  return itemsRemoved;
};

module.exports = without;