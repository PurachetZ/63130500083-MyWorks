const str1 = "NaN means Not a number. Infinity contains -Infinity and +Infinity in JavaScript."

let x = 'NoT';
console.log(Boolean(str1.match('not')))
console.log(Boolean(str1.match('zzz')))
console.log(str1.toLowerCase().match(x.toLowerCase()))
console.log(typeof(str1.toLowerCase().match(x.toLowerCase())))