const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("To check the original array", () => {
    const words = ["YoYo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  }),
  it("To check the array having one element", () => {
    const words = ["Yo Yo"];
    assert.deepEqual(tail(words).length, 0);
  }),
  it("To check with empty array with fail condition", () => {
    const words = [];
    assert.deepEqual(tail(words).length, 1);
  }),
  it("To check with empty array with fail condition", () => {
    const words = [];
    assert.deepEqual(tail(words).length, 0);
  })
});