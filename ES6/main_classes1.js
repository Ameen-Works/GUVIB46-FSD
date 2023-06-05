class Person{
    constructor(name){
        this.name= name;
    }
    getName(){
        return this.name;
    }
}

class Employee extends Person{
    constructor(name, id){
        super(name);
        this.id=id;
    }
    getID= ()=>{
        return this.id;
    };
}

let emp=new Employee("Arshath",2152532);
console.log(emp.getName());
console.log(emp.getID());
console.log(`Name is ${(emp.getName())} and ID is ${emp.getID()}`);