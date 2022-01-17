const { getDays } = require('../src/getDays');

describe('getDays', () => {

    test('entered negative values', () => {
        expect(getDays(-2022, 2)).toBe('Invalid input data');
    });

    test('entered negative values', () => {
        expect(getDays(2022, -2)).toBe('Invalid input data');
    });

    test('no input data', () => {
        expect(getDays()).toBe('Invalid input data');
    });

    test('no input value of month', () => {
        expect(getDays(2022)).toBe('Invalid input data');
    })

    test('no input value of year', () => {
        expect(getDays('', 2)).toBe('Invalid input data');
    })

    test('entered month does not exist', () => {
        expect(getDays(2022, 'hft')).toBe('Invalid input data');
    });

    test('entered year and name month', () => {
        expect(getDays(2022, 'july')).toBe(31);
    });

    test('entered year and number of month', () => {
        expect(getDays(2022, 2)).toBe(28);
    });

    test('entered year and number of month', () => {
        expect(getDays(2020, 2)).toBe(29);
    });

});