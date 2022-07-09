const tax = require('./index');


describe('Testing tax function', () => {
    test('income 450000 & savings 300000', () => {
        expect(tax(450000, 300000)).toBe(40000)
    });
    test('income 750000 & savings 50000', () => {
        expect(tax(750000, 50000)).toBe(147000)
    });
    test('income 1200000 & savings 500000', () => {
        expect(tax(1200000, 500000)).toBe(345000)
    });
    
});