const isOdd = require("./isOdd");

test("Sanity check", () => {
    expect(true).toBe(true);
});

test("Defines function isOdd", () => {
    expect(isOdd).toBeInstanceOf(Function);
});
