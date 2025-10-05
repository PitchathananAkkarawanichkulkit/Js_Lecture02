// loop with object
let dataObj = {
  name: "Sombat",
  age: 20,
  isStudent: true,
  address: {
    province: "Nonthaburi",
    contry: "Thailand",
  },
  food: ["KFC", "Pizza", "Burger"],
}

// เข้าถึงข้อมูลแต่ละตัวของ array ใช้ key
console.log(dataObj.age);
console.log(dataObj.address.province);
console.log(dataObj.food[2]);

// เข้าถึงข้อมูลทุกตัวใน object
for(let key in dataObj){
    console.log(key);
}

console.log('-----------');

for(let [key, values] of Object.entries(dataObj)){
    console.log(key);
    console.log(values);
}

console.log('-----------');

for(let values of Object.values(dataObj)){
    console.log(values);
}

console.log('-----------');

for(let key of Object.keys(dataObj)){
    console.log(key);
}