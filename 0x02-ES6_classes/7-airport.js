export default class Airport {
	constructor(name, code) {
	  this._name = this._validateString(name, 'name');
	  this._code = this._validateString(code, 'code');
	}
  
	// Type validation method
	_validateString(value, attributeName) {
	  if (typeof value !== 'string') {
		throw new TypeError(`${attributeName} must be a string`);
	  }
	  return value;
	}
  
	// Getter for name
	get name() {
	  return this._name;
	}
  
	// Getter for code
	get code() {
	  return this._code;
	}
  
	// Override the default string description
	toString() {
	  return this._code;
	}
  }
  