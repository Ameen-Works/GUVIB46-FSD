// A sequence of characters/ symbols/ numbers enclosed within the '',"",``.
let word=`Arshath@Ameen_WOrks`;
// For..of and for..in can be used here as well.

for(let each of word){
    if(each=='a') break;
    console.log(each);
}
// for (let where in word){
//     console.log(where);
// }

// strings are immutable- reassigning at index level is not allowed.

console.log(word.slice(5,));
//slice is to cut each and every part of the string with starting and ending indices.
