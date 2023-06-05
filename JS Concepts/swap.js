let a=10;
let b=20;

console.log(`Before swapping
the value of a is = `+a+`.
The value of b is = `+b+".");
// method 1:
// let temp=0;
// temp= a;
// a=b;
// b=temp;
// method 2, without temp variable
b=a+b;// here b got added with a
a=b-a;// by removing a value,definitely we have only value of b so assign that value to a
b=b-a;// Here b is associated with a value as from 1st calculation,
// So by removing the new a value (i.e old b) the remaining value is stored
// in b. Hence swapped.

//method 3- De structuring

[a,b]=[b,a];// de-structuring assignment
console.log(`After swapping
the value of a is = `+a+`.
The value of b is = `+b+".");
let intro=["Welcom","to","GUVI!"];
let [greeting,...intro1]=["Hello",intro]

console.log(greeting,intro1)
// Object de-structuring

let person={ name:"Arshath", country: "India", job: "Developer"}


let{name,country,job}=person;
console.log(name);
console.log(country);
console.log(job);
