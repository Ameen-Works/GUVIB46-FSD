let firstname="arshath";
let lastname=" AMeen";

class FullName{
    constructor(firstName,lastName){//Common method, will execute automatically when object created for this class.
        this.firstName=firstName;
        this.lastName=lastName;
        console.log("Constructor called");
    }
    res(){
       let name= this.firstName+" "+this.lastName;
       console.log(name);
       var insideFunc=function(){
        console.log(this.firstName);//we can't access firstName without binding (this).
       }.bind(this);
       insideFunc();
    }
}

obj =new FullName("Arshath","Ameen");
(obj.res());// By use of class we can cll function without params, As we passed the arguments to the constructor.

