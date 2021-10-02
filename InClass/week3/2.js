x = '3';
y = false;
z = [];
console.log(`Type of x: ${typeof(x)}
Type of y: ${typeof(y)}
Type of z: ${typeof(z)}`)
Number(z); // 3
String(y); // "false"
Boolean(z); // true
console.log('--------------------')
console.log(`Type of x: ${typeof(Number(z))}
Type of y: ${typeof(String(y))}
Type of z: ${typeof(Boolean(z))}`)