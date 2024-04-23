"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Institude {
    name;
    student = [];
    addStudent(studentObj) {
        this.student.push(studentObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class course {
    name;
    constructor(name) {
        this.name = name;
    }
}
class teacher {
    name;
    course = [];
    addCourse(courseObj) {
        this.course.push(courseObj);
    }
    constructor(name) {
        this.name = name;
    }
}
let i1 = new Institude("Mehran university");
let studentObj1 = new student("Hina");
let c1 = new course("typescript");
let t1 = new teacher("Manal");
i1.addStudent("Hina");
console.log(i1);
t1.addCourse(c1);
console.log(t1);
