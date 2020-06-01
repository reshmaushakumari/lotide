const assert = require('chai').assert;
const middle = require('../middle');

describe("#tail", () => {
  it("To check the array with 3 values", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  }),
  it("To check the array with 1 values", () => {
    assert.deepEqual(middle([1]),[]);
  }),
  it("To check the array with 2 values", () => {
    assert.deepEqual(middle([1,2]),[]);
  }),
  it("To check the array with even number of values", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  }),
  it("To check the array with even number of values", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  }),
  it("To check the array with odd number of values", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  })
});