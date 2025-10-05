// call back function

function showHollo(){
    console.log('Hollo---');
}

const hi = () =>{
    return 'Hi----'
}


function wow(p1, p2, p3, p4){
    console.log('------------');
    console.log(p1);
    p2()
    console.log(p3());
    p4()
    console.log('--------------');
}

wow('AA', showHollo, hi, ()=>{console.log('eeee');})
