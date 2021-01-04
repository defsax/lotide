const assertEqual = function(a, b) {
  if (a === b)
    console.log(`✅ Assertion passed: ${a} === ${b}`);
  else
    console.log(`❌ Assertion failed: ${a} !== ${b}`);
};

const tail = function(arr) {
  return new Array(arr.slice(1));
};

//test, returns array less 'a'
console.log(tail(['a', 'b', 'c', 'd']));

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result, ['Lighthouse', 'Labs']);