
class Teacher {
    private readonly firstName: string;
    private readonly lastName: string;
    private readonly fullTimeEmployee: boolean;
    private readonly yearsOfExperience?: number;
    private readonly location: string;

    constructor({
        firstName,
        lastName,
        fullTimeEmployee,
        yearsOfExperience,
        location,
        ...otherAttributes
    }: {
        firstName: string;
        lastName: string;
        fullTimeEmployee: boolean;
        yearsOfExperience?: number;
        location: string;
        [key: string]: any; // Allow any other attributes
    }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.yearsOfExperience = yearsOfExperience;
        this.location = location;

        // Assign any other attributes dynamically
        Object.assign(this, otherAttributes);
    }
}

// extends teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// interface for printTeacher
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Interface for the constructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

// Interface for the StudentClass
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClass {
    private readonly firstName: string;
    private readonly lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

