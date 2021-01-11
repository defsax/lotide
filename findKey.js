const assertEqual = function(a, b) {
  if (a === b)
    console.log(`✅ Assertion passed: ${a} === ${b}`);
  else
    console.log(`❌ Assertion failed: ${a} !== ${b}`);
};

const findKey = function(obj, callback) {
  //loop through object
  for (let value in obj) {
    console.log(value);
    //call callback and pass in value at current key.
    //if it satisfies callback's logic(x => x.stars === 2), return value
    if (callback(obj[value]))
      return value;
  }
  //otherwise return undefined
  return undefined;
};

module.exports = findKey;

/*
  Method using Object.entries courtesy of Luc/Alvin

  const findKey = function(data, callback) {
    for (let [key,value] of Object.entries(data)) {
      if (callback(value)) {
        return key;
      }
    }
  };
  
*/

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"
