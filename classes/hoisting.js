var add;

add(3,5);//calling function before declaring

function add(a,b){
    console.log(a+b);
}

var add=function(a,b){
    console.log(a+b);
}
add(7,9);

// when the var created in File, compiler just read and assemble variable from top
// and compiles line by line.
