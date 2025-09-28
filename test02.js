// Identifier คือ  ชื่อที่ตั้งขึ้นมาเอง (ตัวเเปร ฟังก์ชั่น ค่าคงที่ คลาส ออปเจ็ก) ต้องเป็นไปตามกฎการตั้งชื่อ
 
// variable ตัวแปร คือ ชื่อที่ตั้งขึ้นมาเอง เอาไว้เก็บข้อมูลที่เกิดขึ้น

var dti01 = 'aaa'  //แก้ใขได้  is global
let dti02 ='bbb'   // แก้ใขได้ local  ***
const dti03 = 'ccc' // แก้ใขไม่ได้ is local  ***

dti01 = '1111'
dti02 = '2222'
// dti03 = '3333'

{
    var dti04 = 'aaa'  
    let dti05 ='bbb'   
    const dti06 = 'ccc'
    console.log(dti01, dti02, dti03, dti04, dti05,dti06,)
}

