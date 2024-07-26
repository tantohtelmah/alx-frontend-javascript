export default class Building {
    constructor(sqft) {
        if (new.target === Building) {
            throw new TypeError('Cannot construct Building instances directly');
        }
        this._sqft = this._validateNumber(sqft, 'sqft');
    }

    // Type validation method
    _validateNumber(value, attributeName) {
        if (typeof value !== 'number') {
            throw new TypeError(`${attributeName} must be a number`);
        }
        return value;
    }

    // Getter for sqft
    get sqft() {
        return this._sqft;
    }

    // Abstract method to be implemented by subclasses
    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}

// Example subclass
class OfficeBuilding extends Building {
    constructor(sqft) {
        super(sqft); // Pass the sqft argument to the superclass constructor
    }

    evacuationWarningMessage() {
        return 'Evacuate the office building immediately!';
    }
}
