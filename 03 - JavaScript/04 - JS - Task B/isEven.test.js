const isEven = require("./isEven");

test("Sanity check", () => {
    expect(true).toBe(true);
});

test("Defines function isEven", () => {
    expect(isEven).toBeInstanceOf(Function);
});
