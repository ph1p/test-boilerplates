const { sum, sub } = require('../src');

describe('sum()', () => {
    test('7 + 7 to equal 14', () => {
        expect(sum(7, 7)).toBe(14);
    });

    test('typeof sum equal function', () => {
        expect(typeof sum).toBe('function');
    });

    test('no parameters to equal 0', () => {
        expect(sum()).toBe(0);
    });

    test('only one parameter 0 to equal 0', () => {
        expect(sum(0)).toBe(0);
    });

    test('undefined - 0 to equal 0', () => {
        expect(sum(undefined, 0)).toBe(0);
    });
});

describe('sub()', () => {
    test('typeof sub equal function', () => {
        expect(typeof sub).toBe('function');
    });

    test('7 - 3 to equal 4', () => {
        expect(sub(7, 3)).toBe(4);
    });

    test('no parameters to equal 0', () => {
        expect(sub()).toBe(0);
    });

    test('only one parameter 0 to equal 0', () => {
        expect(sub(0)).toBe(0);
    });

    test('undefined + 0 to equal 0', () => {
        expect(sub(undefined, 0)).toBe(0);
    });
});
