var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.coursesEnrolled = [];
        this.balance = 0;
    }
    Student.prototype.generateStudentID = function () {
        return '12345';
    };
    Student.prototype.enroll = function (course) {
        this.coursesEnrolled.push(course);
        this.balance -= course.courseFee;
    };
    Student.prototype.viewBalance = function () {
        console.log("Balance for ".concat(this.name, ": ").concat(this.balance));
    };
    Student.prototype.payTuition = function (amount) {
        var roundedAmount = Math.floor(amount);
        this.balance -= roundedAmount;
        console.log("Paid ".concat(roundedAmount, " tuition fees. Remaining balance: ").concat(this.balance));
    };
    Student.prototype.showStatus = function () {
        console.log("Name: ".concat(this.name));
        console.log("Student ID: ".concat(this.studentID));
        console.log("Courses Enrolled:");
        this.coursesEnrolled.forEach(function (course) {
            console.log("  ".concat(course.courseCode, " - ").concat(course.courseName));
        });
        console.log("Balance: ".concat(this.balance));
    };
    return Student;
}());
var Course = /** @class */ (function () {
    function Course(code, name, credits, fee) {
        this.courseCode = code;
        this.courseName = name;
        this.courseCredits = credits;
        this.courseFee = fee;
    }
    return Course;
}());
var student1 = new Student("Ali Khan");
var mathCourse = new Course("MATH101", "Mathematics", 3, 3500);
var physicsCourse = new Course("PHYS101", "Physics", 4, 4000);
var computerCourse = new Course("COMP101", "Computer", 4, 5000);
var englishCourse = new Course("ENG101", "English", 2, 2500);
var economicsCourse = new Course("ECO101", "Economics", 3, 3500);
student1.enroll(mathCourse);
student1.enroll(physicsCourse);
student1.enroll(computerCourse);
student1.enroll(englishCourse);
student1.enroll(economicsCourse);
student1.payTuition(2000);
student1.showStatus();
