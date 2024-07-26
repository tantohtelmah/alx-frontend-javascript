export default class HolbertonClass {
	constructor(size, location) {
	  this._size = this._validateNumber(size, 'size');
	  this._location = this._validateString(location, 'location');
	}
  
	// Type validation methods
	_validateNumber(value, attributeName) {
	  if (typeof value !== 'number') {
		throw new TypeError(`${attributeName} must be a number`);
	  }
	  return value;
	}
  
	_validateString(value, attributeName) {
	  if (typeof value !== 'string') {
		throw new TypeError(`${attributeName} must be a string`);
	  }
	  return value;
	}
  
	// Getter for size
	get size() {
	  return this._size;
	}
  
	// Getter for location
	get location() {
	  return this._location;
	}
  
	// When the class is cast into a Number, return the size
	valueOf() {
	  return this._size;
	}
  
	// When the class is cast into a String, return the location
	toString() {
	  return this._location;
	}
  }
