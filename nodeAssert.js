// put strick in the first place
const assert = require('assert').strict;
const numberOfVowels = function(str){
  return 3;
}
console.assert(numberOfVowels('tomato') === 3, 'It should have three vowels with tomato');
console.assert([1, 2, 3] === [1, 2, 3], 'the arrays should be equal');

assert.deepEqual([1, 2, 3], [1, 2, 3], 'the arrays should be equal');
// assert.equal(numberOfVowels('watermelon'), 4, 'should be four vowels with watermelon');
// assert.equal(numberOfVowels('sweet potato'), 5, 'should be five vowels with sweet potato');

// try catch, error variable will store all erre information, name, message
// avoid code stopping due to some errors
try{
  assert.equal(numberOfVowels('watermelon'), 4, 'should be four vowels with watermelon');
} catch(error){
  console.log(`${error.name} - ${error.message}`);
  console.log(`Actual: ${error.actual} Expected:${error.expected}`);
}

try{
  assert.equal(numberOfVowels('sweet potato'), 5, 'should be five vowels with sweet potato');
} catch(error){
  console.log(`${error.name} - ${error.message}`);
  console.log(`Actual: ${error.actual} expected:${error.expected}`);
}