let person = {
    firstName: "Arshath",
    lastName: "Ameen",

    get: function get()  {
        console.log(`Outer ${this.firstName} ${this.lastName}`);
        let print=()=>{
            console.log(`Inner ${this.firstName} ${this.lastName}`);
        };
        print();
    },
};
person.get();