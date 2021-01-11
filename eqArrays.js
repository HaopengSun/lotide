// const assertEqual = function(actual, expected) {
//     let correctMsg = 'Assertion Passed: ' + actual + '===' + expected;
//     let errorMsg = 'Assertion Failed: ' + actual + '!==' + expected;
//     if (actual === expected) {
//         console.log(correctMsg);
//     } else {
//         console.log(errorMsg);
//     }
// };

const eqArrays = function(arr1, arr2){
    if (arr1.length === arr2.length){
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i] === arr2[i]){
                continue;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}

module.exports = eqArrays;