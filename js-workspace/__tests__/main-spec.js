
var m= require('../main');

it ('should return true ', () => {
    expect(m.isStartNumberSmallerThanEndNumber(2, 4)).toBe(true);
});
it ('should return false ', () => {
    expect(m.isStartNumberSmallerThanEndNumber(4, 2)).toBe(false);
});
it ('should return true ', () => {
    expect(m.isStartNumberSmallerThanEndNumber(2, 2)).toBe(true);
});

it ('should return true ', () => {
    expect(m.isInRangeOf1to1000(2, 500)).toBe(true);
});

it ('should return false ', () => {
    expect(m.isInRangeOf1to1000(-1,500)).toBe(false);
});

it ('should return false ', () => {
    expect(m.isInRangeOf1to1000(500,1500)).toBe(false);
});

it ('should return false ', () => {
    expect(m.isInRangeOf1to1000(-500,1500)).toBe(false);
});

it ('should return MultiplicationTable ', () => {
    expect(m.buildMultiplicationTable(2,4)).toBe("2*2=4 \n2*3=6 3*3=9 \n2*4=8 3*4=12 4*4=16 \n");
});

it ('should return qualitation', () => {
    expect(m.createEqualitation(1, 2)).toBe("1*2=2");
});

