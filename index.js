var c=5;
var d='5';

if(c===d){
    console.log('equal')
}else{
    console.log('not equal')
}

function multipleByFour(input){
    return input*8;
}
var res=multipleByFour(3)

console.log(res);

// ES6
// instead of var in ES6 we use let and const
//  CONST
const G=6.67408;
console.log(G)

// LET
function letTest(){
    let x=4;
{
    let x=5;
    console.log(x)
}
console.log(x)
}
letTest()
