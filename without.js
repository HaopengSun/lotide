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

const without = function(original, eliminate){
    let output = [];
    for (let i = 0; i < original.length; i++){
        let existing = false;
        for (let j = 0; j < eliminate.length; j++){
            if (original[i] === eliminate[j]){
                existing = true;
            } else {
                continue;
            }
        }
        if (!existing && !output.includes(original[i])){
            output.push(original[i]);
        }
    }
    console.log(output);
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);