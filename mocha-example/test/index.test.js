const { assert } = require("chai");
const { sum, sub } = require("../src");

describe("sum()", () => {
  it("typeof sum equal function", () => {
    assert.typeOf(sum, "function");
  });

  it("7 + 7 to equal 14", () => {
    assert.equal(sum(7, 7), 14);
  });

  it("no parameters to equal 0", () => {
    assert.equal(sum(), 0);
  });

  it("only one parameter 0 to equal 0", () => {
    assert.equal(sum(0), 0);
  });

  it("undefined - 0 to equal 0", () => {
    assert.equal(sum(undefined, 0), 0);
  });
});

describe("sub()", () => {
  it("typeof sub equal function", () => {
    assert.typeOf(sub, "function");
  });

  it("7 - 3 to equal 4", () => {
    assert.equal(sub(7, 3), 4);
  });

  it("no parameters to equal 0", () => {
    assert.equal(sub(), 0);
  });

  it("only one parameter 0 to equal 0", () => {
    assert.equal(sub(0), 0);
  });

  it("undefined + 0 to equal 0", () => {
    assert.equal(sub(undefined, 0), 0);
  });
});
