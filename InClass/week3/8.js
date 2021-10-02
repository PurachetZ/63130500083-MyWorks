let myObj = {
    id: 1,
    task: 'grading exam'
};
let myObj2 = {
    id: 1,
    task: 'grading exam'
};
newObj = myObj;
console.log(`newObj === myObj is ${newObj === myObj}`);
console.log(`myObj1 === myObj2 is ${myObj === myObj2}`);
console.log("--------");
let a = [];
let b = a;
b[0] = 1;
let c = [1];
console.log(`a === b is ${a === b}`);
console.log(`b == c is ${b == c}`);
