let num1 = 10;
let num2 = 20;
num2 = num1;
console.log(num1 == num2);
num2 = 55;
console.log(num1)

let per1 = { id:1, name: 'P'};
let per2 = { id:1, name: 'P'};

per2 = per1;
console.log(per1 == per2);

let arr1 = [0, 2, 4, 6];
let arr2 = [0, 2, 4, 6];
console.log(arr1 === arr2);
arr2 = arr1;
arr2[1] = 5;
console.log(arr1[1]);
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2);


x1 = {id:1}
x1 = null
console.log(x1 === null);
