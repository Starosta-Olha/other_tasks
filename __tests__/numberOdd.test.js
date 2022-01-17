const { Number } = require('../src/numberOdd');

describe('getDays', () => {

    test('entered even number', () => {
        expect((2).isOdd()).toBe(false);
    });
    test('entered odd number', () => {
        expect((9).isOdd()).toBe(true);
    });
});