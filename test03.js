// operator
// arithmetic operator + - * / %

console.log(20 % 2);
console.log(0 % 500);

// comparison operator เปรียบบเทียบ (true/false) == != > < >= <= === !==
// ==, != ไม่สนใจ Data type
console.log(111 == '111');

// ===, !== สนใจ Data type
console.log(111 === '111');

// เปรีบเทียบข้อความ
console.log('sombat' < 'somjai');
console.log('bangna' >= 'bangpoo');


// Logical operator ตรรกะ ! (not), && (and), || (or)
// ข้อมูลที่ใช้จะมีแค่ true false 
console.log(!true);
console.log(false);
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

console.log(false||false);
console.log(true||true);
console.log(true||false);
console.log(false||true);

// ***ternary operator เงื่อนใข ? ทำเมื่อเป็นจริง : ทำเมื่อเป็นเท็จ

let data1 = 100 % 30 == '0' ? 'wow....' : 'hui....'

// increment ++ เพิ่มตัวมันเองทีละ 1/decrement -- ลดตัวมันเองทีละ 1
let data2 = 10
console.log(data2);
data2++
++data2
data2++
console.log(data2);
