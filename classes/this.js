var operation={
    a:1,
    b:2,
    add: function(){
        this.a+this.b;
        console.log(`a=${this.a}, b=${this.b}`);
        var print= function(){
            console.log(`a=${operation.a}, b=${this.b}`);//This key word is used to call the variable within the constructor(Scope reference)
        }
        print();
    }
}
operation.add();

var person={
    name: "Arshath",
    get: function(){
        console.log("outer: "+this.name);
        let that=this;// Here we are passing this components into that variable so that we can access variables here as well.
        var printRegularFunc=function(){// Regular function gets inherit only from immediate parent function
            console.log("inner Regular :"+that.name);
            console.log("inner Regular without that :"+this.name);
        }.bind(this);// This will bind the variables to this regular function, we can use it widely after this scope also.
        printRegularFunc();
        var printArrowFunc=()=>{// Arrow function gets inherit  from global variable.
            console.log("inner :"+this.name);
        }
        printArrowFunc();
    }
// We can use arrow function only at inner function of a regular function.
}
person.get();
