const findKeyByValue = function(obj, val) {
  for (let i in obj) {
    if (obj[i] === val)
      return i;
  }
  return undefined;
};

module.exports = findKeyByValue;