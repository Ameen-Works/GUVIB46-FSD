// // functions are block of statements
// // the block is execute only when we call a function.
// // function sayHello(){
// //     console.log('hello');
// // }

// // //calling Function
// // sayHello();
// // sayHello();
// // sayHello();
// /// the above is re-usability.
// // The function breaks if return keyword encountered.

// //Bult-in Functions= console.log(),parseInt(), parseFloat(),
// //User-defined functions= what we are creating is called...
// // let sayHello= function(){
// //     console.log('HELLO');
// // }

// // sayHello();
// // sayHello();
// // sayHello();

// // Arrow Function is introduced in ES6...

// let sayHello=(name)=>{
//     console.log('heLLo'+name);
    
// }

// sayHello('Arshath');
// sayHello();
// // Anonymoous function-- same like arrow function and we can't use by reference calling.
// // it will run at atime.

// (()=>{
//     console.log('Anonymous');
// })();
// //Hoisting a function-> call a function then defining a function.
// // Only works with function keyword.
// callFunction();

// function callFunction(){
//     console.log('Function called');
// }
let a=50;
let b=20;

function sum(){
    return (a+b);
}
function subtract(){
    return (a-b);
}
function multiply(){
    return (a*b);
}

function calc(){
    return "ADD: "+ sum()+";"+"SUBTRACT: "+subtract()+";MULTIPLY: "+multiply();
}
let result= calc();

console.log(result);





















