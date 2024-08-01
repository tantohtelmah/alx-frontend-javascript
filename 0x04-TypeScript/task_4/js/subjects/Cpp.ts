// Cpp.ts

namespace Subjects {
	// Declaration merging: Add the optional attribute to the Teacher interface
	export interface Teacher {
	  experienceTeachingC?: number;
	}
  
	// Define the Cpp class that extends from Subject
	export class Cpp extends Subject {
	  getRequirements(): string {
		return "Here is the list of requirements for Cpp";
	  }
  
	  getAvailableTeacher(): string {
		if (this.teacher && this.teacher.experienceTeachingC) {
		  return `Available Teacher: ${this.teacher.firstName}`;
		} else {
		  return "No available teacher";
		}
	  }
	}
  }
  