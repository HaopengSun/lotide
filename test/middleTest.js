// const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');
const assert = require('chai').assert;

// assertArraysEqual(eqArrays(middle([1]), []), true);
// assertArraysEqual(eqArrays(middle([1, 2]), []), true);
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);

describe('test middle function', function(){
  it('should return true for [1]', () => {
    assert.isTrue(eqArrays(middle([1]), []));
  });
  it('should return true for [1, 2]', () => {
    assert.isTrue(eqArrays(middle([1, 2]), []));
  });
  it('should return true for [1, 2, 3, 4, 5]', () => {
    assert.isTrue(eqArrays(middle([1, 2, 3, 4, 5]), [3]));
  });
  it('should return true for [1, 2, 3, 4]', () => {
    assert.isTrue(eqArrays(middle([1, 2, 3, 4]), [2, 3]));
  });
  it('should return true [1, 2, 3, 4, 5, 6]', () => {
    assert.isTrue(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
  });
});