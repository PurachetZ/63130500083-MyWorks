let arr1 = []; //array

let obj = {}; //object

console.log(typeof arr1);

console.log(arr1.length);

arr1 = [10, true, 1, 'unknown', ['A', 'B', 'C'], { id: 1, name: 'Adam' }]; //array is untyped

console.log(arr1[arr1.length - 1]);

console.log(arr1[arr1[2]]); // [integer expression]

console.log(arr1[4][2])

console.log(arr1[4][arr1[4].length -1])

console.log(arr1[5].name)

arr1[4][0] = 'x';


let arr3 = '2030';
let arr4 = [...arr3];
console.log(arr4);