const tail = require('../tail');
const assert = require('chai').assert;
// const assertEqual = require('../assertEqual');

// const words = ["Hello", "Lighthouse", "Labs"];
// const result = tail(words);
// assertEqual(result, ["Lighthouse", "Labs"]); will always return false

// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
// assertEqual(words.length, 3);

describe("#tail", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words).length, 2);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words)[0], "Lighthouse");
  });
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words)[1], "Labs");
  });
});