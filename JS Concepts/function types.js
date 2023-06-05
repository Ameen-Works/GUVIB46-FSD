// Named Function
// Anonymous function
//IIFEE- Immediately Invoked function expression
// Arrow function


//Named......
//like add, subtract, square1....

var square= function(num){
    return num*num;
}

console.log(square(5));

//IIFE...........

(function(){
    console.log("I'm In");
})();

//Arrow..............

let mul= (a,b)=>{
    return a*b;
}

console.log(mul(5,4));