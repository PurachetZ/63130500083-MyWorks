/*let variables*/
//greeting is block scope
let greeting = 'Hey';
//let variables cannot be redeclared, only can be updated
greeting = 'Ho Ho';
function greeter() {
//msg is function scoped, we cannot access the variable msg outside of a function
let msg = 'hello';
}
// console.log(msg); //error: msg is not defined
console.log(greeting);
let year = 'leap';
if (year === 'leap')
    greeting = 'Hey 366 days';
console.log(greeting);


