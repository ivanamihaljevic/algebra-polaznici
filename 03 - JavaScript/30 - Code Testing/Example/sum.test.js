const sum = require('./sum');

test('adds 5 + 5 to equal 10', () => {
    expect(sum(5, 5)).toBe(10);
})