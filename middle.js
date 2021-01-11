const middle = function(arr) {
  if (arr.length < 3) {
    //no middle
    return [];
  } else if (arr.length % 2 === 0) {
    //even
    return [arr[Math.floor(arr.length / 2) - 1], arr[Math.floor(arr.length / 2)]];
  } else {
    //odd
    return [arr[Math.floor(arr.length / 2)]];
  }
};

module.exports = middle;