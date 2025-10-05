// loop with Array
let dataArr = [
    111,
    'somjai',
    true,
    {name: 'dombat', age: 20},
    [111, 222]
]

// เข้าถึงข้อมูลแต่ละตัวของ array ใช้ index
console.log(dataArr[1]);
console.log(dataArr[2]);
console.log(dataArr[4].name);

// เข้าถึงข้อมูลทุกตัวใน array
dataArr.forEach((item, index)=>{
    console.log(item);
    console.log(index);
    
})

    console.log('------------');

    dataArr.map((item, index)=>{
        console.log(item);
        console.log(index);
    })

    console.log('------------');

    for(let item of dataArr){
        console.log(item);
    }

    for(let index in dataArr){
        console.log(index);
    }