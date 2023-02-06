const maxNumber = require("./script");
const testArray = [1, -72, 10, -4, 0, 0.0001, 999, 132914];

test("Get max number", () => {
    expect(maxNumber(testArray)).toBe(132914);
});

test("Return -Infinity for empty array", () => {
    expect(maxNumber([])).toBe(-Infinity);
});

test("Return undefined for no argument", () => {
    expect(maxNumber()).toBe(undefined);
});
