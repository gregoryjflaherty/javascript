const functions = require('./functions');

test('Adds 2 + 2 = 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 != 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsey', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('Should be truthy', () => {
    expect(functions.checkValue(3)).toBeTruthy();
});

test('User should be Greg Flaherty object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Greg', 
        lastName: 'Flaherty'});
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});