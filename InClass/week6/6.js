let c = [[5, 10, 15]];
let d = [...c];
d[0] = 10;
console.log(`d: ${d}`); //d: 10,10,15
console.log(`c[0]: ${c[0]}`); //5
console.log(`d[0]: ${d[0]}`); //10
