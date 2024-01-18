import Vehicle from "./Vehicle.js";

class Car extends Vehicle {

    constructor() {
        super();
        this.speed = 20;
        console.log("car speed",this.speed);
    }
}