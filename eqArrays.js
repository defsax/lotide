const eqArrays = function(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    console.log('One of arrays is not an array.');
    return false;
  }

  if (arrayA.length !== arrayB.length) {
    console.log('Arrays are not same length.');
    return false;
  }
  
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      console.log('Elements at arrayA[' + i + '] = ' + arrayA[i] + ' and arrayB[' + i + '] = ' + arrayB[i] + ' are not equal.');
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;