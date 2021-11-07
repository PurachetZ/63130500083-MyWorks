var str = "Zako School";
var pattern1 = /zako/i;
var result1 = pattern1.test(str); // result1 = true
var pattern2 = /zako/;
var result2 = pattern2.test(str); // result2 = false



console.log(result1)
console.log(result2)
console.log('--------')

let text = 'zako'
let pattern3 = /{{text}}/i;
console.log(typeof(pattern3))
var result3 = pattern3.test(str);
console.log(result3)