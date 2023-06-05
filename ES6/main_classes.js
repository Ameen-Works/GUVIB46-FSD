// function add(){

// }

class Vehicle{
    constructor(){
        this.run="Drrrrrrrrrrrrrrrr.............................";
    }
}

class RoyalEnfield extends Vehicle{// inheritance property achieved here
    constructor(){
        super();// Must to add, when using inheritance property
        this.sound="BUDU..BUDU..BUDU...";
    }
}

let myBike= new RoyalEnfield();

console.log(myBike.run+ myBike.sound);