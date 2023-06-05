class Person{
    constructor(name){
        this.setName(name);
    // this.name=name;
    }
    setName(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
}
let person= new Person("GUVI");
console.log(person.name);

//Inorder to avoid accessing the properties of class using Object directly.
// we can use Getter and setter.

person.setName("Arshath");
console.log(person.getName());