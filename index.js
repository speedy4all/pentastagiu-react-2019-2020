function Classroom(capcacity = 32){
  this.capcacity = capcacity;
  this.students = [];
  this.addStudent = function(student){
      this.students.push(student);
  }
}

Classroom.prototype.addStudent = function(student){
  this.students.push(student);
}

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

const pers1 = new Person('Ana', 'Boar');
const pers2 = new Person('Cristina', 'Ilie');

const classroom = new Classroom();
const classroom1 = new Classroom();

//console.log(person);

classroom.addStudent(pers1);
classroom.addStudent(pers1);

classroom1.addStudent = function(){
  console.log('mock function');
}

classroom.addStudent(pers1);

classroom1.addStudent(pers1);
console.log(classroom);
console.log(classroom1);