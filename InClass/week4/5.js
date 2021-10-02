let o = Object.create({x: 1, y: 2});
let p = Object.create(o);
console.log(p.x); //1
console.log(p.y); //2

let date = new Date();
console.log(date);