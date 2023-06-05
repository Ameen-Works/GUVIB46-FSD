let arr= [1,2,3,4];
let arr1=[5,6,7];

let sum= (a,b,c,d)=>{
    return a+b+c+d;
}
// Spread operator (...arr) which represents all elements of an array.
// console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr));

// ((a,b)=>{
//     console.log([a,b]);
// })(...arr,...arr1);
let arr3= [...arr,...arr1];
console.log(arr3);
console.log(sum(...arr3));

// Rest- is a parameter , as same as  spread (...arr)
//converts the parameter into arr.

function add(...arr){

    let sum=0;
    arr.forEach((value)=> {sum+= value});//arrow function used...

    return sum;
}

console.log(add(...arr3));