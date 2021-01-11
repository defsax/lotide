const findKey = function(obj, callback) {
  //loop through object
  for (let key in obj) {
    //call callback and pass in value at current key.
    //if it satisfies callback's logic(x => x.stars === 2), return key
    if (callback(obj[key]))
      return key;
  }
  //otherwise return undefined
  return undefined;
};

module.exports = findKey;