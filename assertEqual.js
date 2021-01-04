const assertEqual = function(a, b) {
  if (a === b)
    console.log('✅' + ' Assertion passed: ' + a + ' === ' + b);
  else
    console.log('❌' + ' Assertion failed: ' + a + ' !== ' + b);
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('case check', 'Case check');
assertEqual(1 + 1, 2);