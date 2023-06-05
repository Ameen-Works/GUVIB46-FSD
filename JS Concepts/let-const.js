//let is a block scope variable......
let a = 10;
console.log(a);
a=20;// reassigning is possible
console.log(a);
//let a="redeclared";// Let we can't redeclare, since its meaningless or make the variable faulty 
//and it will behaves within scope

//Var is a global scope variable............
var a1= 10;
console.log(a1);
a1= 20;
console.log(a1);
var a1="Redeclared"// var can reassign, redeclare & reuse... and it's not respect to scope{}


// Constant variable we can't reassign or redeclare, it will remain same...

function modulus(constant){

    if(constant){
        const k="Bulk modulus";
        console.log(k);
    }
    // console.log(k);
}

modulus(true);