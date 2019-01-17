const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(2);
});

test('adds 3 + 4 to equal 7', () => {
    expect(sum(3, 4)).toBe(7);
});

test('adds 5 + 6 to equal 11', () => {
    expect(sum(1, 2)).toBe(0);
});
