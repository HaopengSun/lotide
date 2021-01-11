const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2){
    let output = true;
    if (arr1.length === arr2.length){
        if (!eqArrays(arr1, arr2)){
            output = false;
        }
    } else {
        output = false;
    }
    if (output){
        console.log('These two arrays are equal!');
    } else {
        console.log('These two arrays are not equal!');
    }
}

module.exports = assertArraysEqual;