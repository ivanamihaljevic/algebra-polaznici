// Classes are in fact "special functions".
class Student {
    constructor(firstName, lastName, years, major, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.years = years;
        this.major = major;
        this.id = id;
    }

    basicInfo() {
        return `The student ${this.firstName} ${this.lastName} is ${this.years} years old.`
    }

}

let student1 = new Student('Nino', 'Skuflic', 25, 'Web & Mobile Computing', 12345);
console.log(student1)

class Report extends Student {
    constructor(firstName, lastName, years, major, id, grade, minor) {
        super(firstName, lastName, years, major, id)
        this.grade = grade;
        this.minor = minor;
    }

    yearLevel() {
        return `The student ${this.firstName} ${this.lastName} is a ${this.grade.toLowerCase()} and he/she/it is ${this.years} years old.`
    }

}

let student2 = new Report('Ines', 'Herceg', 25, 'Memes', 1234, 'Senior', 'Programming Humor');