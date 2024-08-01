// React.ts

namespace Subjects {
  // Add the optional attribute to the Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Define the React class within the same namespace
  export class React {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
