// Import the Car class from 10-car.js (assuming it exists)
import Car from "./10-car.js"

class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(); // Call the constructor of the superclass (Car)
        this._brand = brand;
        this._motor = motor;
        this._color = color;
        this._range = range;
    }

    // Override the cloneCar method
    cloneCar() {
        // Create a new Car instance with the same attributes
        const carInstance = new Car();
        carInstance._brand = this._brand;
        carInstance._motor = this._motor;
        carInstance._color = this._color;
        carInstance._range = this._range;
        return carInstance;
    }
}
