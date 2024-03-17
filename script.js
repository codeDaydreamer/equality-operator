
//Equality operator - compares values only

const PI = 3.14;

if(PI == `3.14`){
    console.log(`it is PI`);
}
else{
    console.log(`it is not PI`);
}

//Strict equallty operator - compares values and datatypes
const radius = 22;

if(radius === 22){
    console.log(`it is radius`);
}
else{
    console.log(`it is not radius`);
}
//Inequality operator - compares values only
const PI2 = 3.14;

if(PI2 != `3.14`){
    console.log(`it is NOT PI`);
}
else{
    console.log(`it is PI`);
}
//Strict inequallty operator - compares values and datatypes
const radius2 = `22`;

if(radius2 !== 22){
    console.log(`it is NOT radius`);
}
else{
    console.log(`it is radius`);
}