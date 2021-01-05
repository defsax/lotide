const eqArrays = function(arrayA, arrayB) {
  for (let i = 0; i < arrayA.length; i++) {
    console.log(arrayA[i], arrayB[i]);
    if (arrayA[i] !== arrayB[i])
      return false;
  }
  return true;
};