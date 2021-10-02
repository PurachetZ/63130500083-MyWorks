null == undefined // true: These two values are treated as equal.
"0" == 0 // true: String converts to a number before comparing.
0 == false // true: Boolean converts to number before comparing.
"0" == false // true: Both operands convert to 0 before comparing.

console.log(null == undefined);
console.log("0" == 0);
console.log(0 == false);
console.log("0" == false);

console.log(0 == "");
console.log("---------------------");

console.log(1 == true);
console.log("1" == []);
console.log("1" == 1);
console.log(1 == null);
console.log("1" == undefined);