let obj1={name: "person1", age: 25};
let obj2={age: 24, name: "person2"};

let size=Object.keys(obj1).length;
let result=[];

let compareTwoJson=(obj1,obj2)=>{
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            
            if(Object.keys(obj1)[i]!==Object.keys(obj2)[j]){

                continue;
                
            }
            result[i]=true;
        }
    }
    return result;
}
console.log(compareTwoJson(obj1,obj2));

let output=(result.length===size)?true:false;

// console.log(result.length);
// console.log(size);
console.log(output);