class Institude{
  name : string;
  student : any= [] 
  addStudent(studentObj : string){
    this.student.push(studentObj)
  } 
  constructor(name : string){
      this.name = name
  }
}

class student{
    name : string;
    constructor(name : string){
        this.name = name
    }

}


class course{
    name : string;
    constructor(name : string){
        this.name = name
    }
}

class teacher{
    name : string;
    course : any =[]
    addCourse(courseObj: course){
        this.course.push(courseObj)
    }
    constructor(name : string){
        this.name = name
    }
}


let i1 = new Institude("Mehran university");
let studentObj1 = new student ("Hina");
let c1 = new course("typescript");
let t1 = new teacher("Manal")

i1.addStudent("Hina")
console.log(i1);
t1.addCourse(c1)
console.log(t1);







