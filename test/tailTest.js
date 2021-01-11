const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Hello", "Lighthouse", "Labs"];
const result = tail(words);
// assertEqual(result, ["Lighthouse", "Labs"]); will always return false

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(words.length, 3);