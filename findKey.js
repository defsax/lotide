const findKey = function(obj, callback) {
  //loop through object
  for (let value in obj) {
    //call callback and pass in value at current key.
    //if it satisfies callback's logic(x => x.stars === 2), return value
    if (callback(obj[value]))
      return value;
  }
  //otherwise return undefined
  return undefined;
};

module.exports = findKey;