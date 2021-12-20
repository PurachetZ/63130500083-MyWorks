let re = new RegExp('\ab+c');
//เริ่มต้นด้วย a 
//b+ หมายถึงตัว b เท่ากับ 1 ตัวหรือมากกว่า
//c ปิดท้าย
console.log(re.test('abc'))  // T
console.log(re.test('abbc'))  // T
console.log(re.test('abbbbbbbbc'))  // T
console.log(re.test('ABC'))  // F
console.log(new RegExp('\ab+c', 'i').test('ABC'))  // T เพราะ ใส่ i เพิ่มลงไปหมายถึง ignoreCase
