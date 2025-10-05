// Arrow function
// ใช้หลักการเดียวกับ function expression

let data1 = () => {
  console.log(111);
};

let data2 = (n1, n2) => {
  console.log(n1 + n2);
  return "wow wow wow";
};

let data3 = 555;
data1();
console.log(data2(100, 200));
data1 = "hollo";
console.log(data1);

console.log("-----------");

// กรณีพารามิเตอร์มีตัวเดียว ไม่จำเป็นต้องมี ()
let info1 = (param1) => {
  console.log(param1);
};

// กรณี คำสั่งการทำงานมีคำสั่งเดียว ไม่จำเป็นต้องใช้ {}
let info2 = (param2) => console.log(param2);

let info3 = () => {
  return 111;
};

// กรณีที่คำสั่งการทำงานมีคำสั่งเดียว และเป็น return หากไม่ใช้ {} ต้องไมมี return
let info4 = () => 111;
