const sum = require('./sum')
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


const cap = require('./capitalize')
test('Captitalize first char',()=>{
    expect(cap("hello")).toBe('Hello');
}); 

const rev = require('./reverse');
test('Hello reverse into olleH',()=>{
    expect(rev('Hello')).toBe('olleH');
});

const calculator = require('./calculator');
test('Answers',()=>{
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.subtract(1,2)).toBe(-1);
    expect(calculator.multiply(1,2)).toBe(2);
    expect(calculator.divide(1,2)).toBe(0.5);
});


const analyzeArray = require('./analyze');
test('Analyzed', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});


const caesarCipher= require('./caeser')
test("return cipher text", () => {
    expect(caesarCipher("abcde", 2)).toBe("cdefg");
});
