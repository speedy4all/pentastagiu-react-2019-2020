function ClassRoom(capacity = 32) {
    this.capacity = capacity;
    this.students = []
}

ClassRoom.prototype.addStudent = function(student) {
    this.students.push(student);
}

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const pers1 = new Person('Adin', 'Ober');
const pers2 = new Person('Bogdan', 'Buescu');

const classRoom = new ClassRoom();


classRoom.addStudent(pers1);
classRoom.addStudent(pers2);

console.log(classRoom);
