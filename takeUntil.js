const takeUntil = function(array, callback) {
  let results = [];
  
  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  //if callback is not satisfied...
  return results;
};

module.exports = takeUntil;