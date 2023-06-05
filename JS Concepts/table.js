let input=3;
let table=[];
for (let i=1; i<=input;i++){
    // table[i]= 9*(i+1);
    table.push(9*i);
}
let output=table.join(" ");
console.log(output.trim());
console.log(...table);// Using spread operator. `