class Student {
    name: string;
    studentID: string;
    coursesEnrolled: Course[];
    balance: number;

    constructor(name: string) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.coursesEnrolled = [];
        this.balance = 0;
    }

    generateStudentID(): string {
        return '12345';
    }

    enroll(course: Course): void {
        this.coursesEnrolled.push(course);
        this.balance -= course.courseFee;
    }

    viewBalance(): void {
        console.log(`Balance for ${this.name}: ${this.balance}`);
    }

    payTuition(amount: number): void {
        const roundedAmount = Math.floor(amount);
        this.balance -= roundedAmount;
        console.log(`Paid ${roundedAmount} tuition fees. Remaining balance: ${this.balance}`);
    }
    showStatus(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log("Courses Enrolled:");
        this.coursesEnrolled.forEach(course => {
            console.log(`  ${course.courseCode} - ${course.courseName}`);
        });
        console.log(`Balance: ${this.balance}`);
    }
}

class Course {
    courseCode: string;
    courseName: string;
    courseCredits: number;
    courseFee: number;

    constructor(code: string, name: string, credits: number, fee: number) {
        this.courseCode = code;
        this.courseName = name;
        this.courseCredits = credits;
        this.courseFee = fee;
    }
}

const student1 = new Student("Ali Khan");
const mathCourse = new Course("MATH101", "Mathematics", 3, 3500);
const physicsCourse = new Course("PHYS101", "Physics", 4, 4000);
const computerCourse = new Course("COMP101", "Computer", 4, 5000);
const englishCourse = new Course("ENG101", "English", 2, 2500);
const economicsCourse = new Course("ECO101", "Economics", 3, 3500);

student1.enroll(mathCourse);
student1.enroll(physicsCourse);
student1.enroll(computerCourse);
student1.enroll(englishCourse);
student1.enroll(economicsCourse);
student1.payTuition(2000);
student1.showStatus();
