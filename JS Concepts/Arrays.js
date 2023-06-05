// let arr1= [9,3,2,4];
// // console.log(arr1);
// // console.log(arr1[9]);
// arr1[9]= 10;
// // console.log(arr1[9]);
// // console.log(arr1[6]);
// // console.log(arr1.length);
// // for(let i=0; i<arr1.length;i++){
// //     console.log(arr1[i]);
// // }

// // for (let i=arr1.length-1;i>=0 ;i--){
// //     console.log(arr1[i]);
// // }

// // fo...r of loop
// // for (let anything of arr1){
// //     if (anything==4) break;
// //     console.log(anything);
// // }
// /// for .. in loop
// for (let vacant in arr1){
//     console.log(vacant+':'+arr1[vacant]);
// }

// // arr1.forEach((value, index)=>{
// //     console.log(value,index);
// // });

// // let aFunction=(something, anything, arr1)=>{
// //     console.log(something,anything,arr1);
// // }

// // arr1.forEach(aFunction);

// function Sorter(b,a){
//     if(a<b){
//         return -1;
//     }else if(a>b){
//         return 1;
//     }else{
//         return 0;
//     }
// }

// arr1.sort(Sorter);
// console.log(arr1);

let array=[1,2,3,4];

// array.push(5,6,7,8);

// console.log(array);

// array.pop();

// console.log(array);
// // Unshift to insert entry at beginning
// array.unshift(10);
// // shift to remove the first element
// array.shift();
// console.log(array);
// // Splice used to remove andinser element at the beginning.
// array.splice(1,1,10);
// console.log(array);

//map to apply some function to each of the element in array.

let SquareFunc=(item)=>{
    return item**2;  //**- Exponent operator
}

console.log(array.map(SquareFunc));

//**Sort method is inplace method, which alters the original array.
//whereas map is not an inplace method.*/

//Join- method to concatenate all the elements within an array by any separator(,'' )..

console.log(array.join('|'));






































