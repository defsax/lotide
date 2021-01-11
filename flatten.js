const flatten = function(flatArr, unsortedArr) {
  for (let i of unsortedArr) {
    if (Array.isArray(i))
      flatten(flatArr, i);
    else
      flatArr.push(i);
  }
  return flatArr;
};

module.exports = flatten;