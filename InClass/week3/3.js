String(1) + ' objects'; //"1 objects": Number 1 converts to a string
Number('5') * Number('4'); //20: both strings convert to numbers
let n =Number( 'y') - 1; // n == NaN; string "y" can't convert to a number

console.log(String(1) + ' objects');
console.log(Number('5') * Number('4'));
console.log(n);