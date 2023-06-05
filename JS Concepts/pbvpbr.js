var name="Arshath";
// passing the value (var name) to the function.
function pbv(newName){
    console.log(newName);
    newName="Ameen";
    console.log(newName);
}
pbv(name);
console.log(name);


var personObj={name: "Arshath", age: 32};
// passing the reference personObj (Object, if we send personObj.name ,then this will agin act as PBV) to the function.
function pbr(newObj){
    console.log(newObj.name);
    newObj.name="Ameen";
    console.log(newObj.name);
}

var personObjName=personObj.name;
pbr(personObj);
console.log(personObj.name);