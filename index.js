
function ClassRoom(capacity = 32) {
    this.capacity = capacity;
    this.students = [];
}

ClassRoom.prototype.addStudent = function(student = {}) {
   if(this.students.length >= this.capacity) {
        console.log(`Sorry! Class is full`);
        return;
   }
   this.students.push(student);
   console.log(`Hello ${student.firstName} ! Welcome to class !`);
}

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const pers1 = new Person('Bogdan', 'Buescu');
const pers2 = new Person('Mircea', 'Blendea');

const classRoom = new ClassRoom(1);

classRoom.addStudent(pers1);
classRoom.addStudent(pers2);

console.table(classRoom.students);

