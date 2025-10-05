// เชื่อมข้อมูลหลายๆ ตัวเข้าด้วยกัน
let data1 = 50
let data2 = 'sau'
console.log(data1+'wow' +data2);
console.log(data1+'wow',data2);
console.log(`${data1} wow ${data2}`);




// คำสั่ง break, continue in loop
// break; in loop เมื่อทำงานจะจบลูปทันที่
// continue in loop เมื่อทำงานจะจบรอบนั้นทันที ให้ไปรอบต่อไป

for(let x = 1; x <= 5; ++x){
    if(x == 3){
        break
    }
    console.log(x, 'hi');
}

console.log(`----------------`);

for(let y = 1; y <= 5; ++y){
    if(y == 3){
        continue
    }
    console.log(y = 'hollo');
}