const assertArraysEqual = function(arr1, arr2){
    let output = true;
    if (arr1.length === arr2.length){
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i] === arr2[i]){
                continue;
            } else {
                output = false;
            }
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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 5]); 