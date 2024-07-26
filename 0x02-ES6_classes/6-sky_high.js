// Import the Building class from 5-building.js (assuming it's in the same directory)
const Building = require('./5-building');

class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft); // Call the parent class constructor
        this._floors = floors;
    }

    // Getter for floors attribute
    get floors() {
        return this._floors;
    }

    // Override evacuationWarningMessage
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors.`;
    }
}
