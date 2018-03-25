const { sum, sub } = require('../src');

describe('sum()', () => {
    it('7 + 7 to equal 14', () => {
        expect(sum(7, 7)).toBe(14);
    });

    it('typeof sum equal function', () => {
        expect(typeof sum).toBe('function');
    });

    it('no parameters to equal 0', () => {
        expect(sum()).toBe(0);
    });

    it('only one parameter 0 to equal 0', () => {
        expect(sum(0)).toBe(0);
    });

    it('undefined - 0 to equal 0', () => {
        expect(sum(undefined, 0)).toBe(0);
    });
});

describe('sub()', () => {
    it('typeof sub equal function', () => {
        expect(typeof sub).toBe('function');
    });

    it('7 - 3 to equal 4', () => {
        expect(sub(7, 3)).toBe(4);
    });

    it('no parameters to equal 0', () => {
        expect(sub()).toBe(0);
    });

    it('only one parameter 0 to equal 0', () => {
        expect(sub(0)).toBe(0);
    });

    it('undefined + 0 to equal 0', () => {
        expect(sub(undefined, 0)).toBe(0);
    });
});
