// const assertArraysEqual = require('../assertArraysEqual');
const { expect } = require('chai');
const eqArrays = require('../eqArrays');
const middle = require('../middle');
// const { assert } = require('chai') 
const assert = require('chai').assert;

// assertArraysEqual(eqArrays(middle([1]), []), true);
// assertArraysEqual(eqArrays(middle([1, 2]), []), true);
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);

describe('test middle function', function(){
  it('should return emply for [1]', () => {
    expect(middle([1])).to.be.empty;
    // assert.isTrue(eqArrays(middle([1]), []));
  });
  it('should return empty for [1, 2]', () => {
    assert.isTrue(eqArrays(middle([1, 2]), []));
  });
  it('should return [3] for [1, 2, 3, 4, 5]', () => {
    const result = middle([1, 2, 3, 4, 5]);
    // assert.isTrue(eqArrays(result, [3]));
    expect(result).to.be.deep.equal([3]);
  });
  it('should return [2, 3] for [1, 2, 3, 4]', () => {
    assert.isTrue(eqArrays(middle([1, 2, 3, 4]), [2, 3]));
  });
  it('should return [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.isTrue(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
  });
});