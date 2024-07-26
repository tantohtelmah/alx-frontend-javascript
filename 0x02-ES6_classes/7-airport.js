export default class Airport {
	constructor(name, code) {
	  this._name = name;
	  this._code = code;
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
	// toString() {
	// 	return this._name;
	//   }
  }
