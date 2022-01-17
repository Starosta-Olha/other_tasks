const { every } = require("../src/every");

describe('every',() => {

    test('first argument is not an array',() => {
        expect(every({8:2}, function (num){
            return num%2===0
        }) ).toBe(false);
    });

    test('array is empty',()=>{
        expect(every([], function (num){
            return num%2===0
        }) ).toBe(false);
    });

    test('second argument is not a function',()=>{
        expect(every([2,5,6], '') ).toBe(false);
    });

    test('return result',()=>{
        expect(every([8,4,2], function(num) {
            return num % 2 === 0;
        })).toBe(true);
    });

})