
function ClassRoom(capacity = 32) {
    this.capacity = capacity;
    this.students = [];
    console.log(arguments);;
    
}

ClassRoom.prototype.addStudent = function(student) {
    this.students.push(student);
}

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const pers1 = new Person('Andreea','Tiru');
const pers2 = new Person('Mircea','Blendea');

const classRoom = new ClassRoom(3,3,7,8,9);

classRoom.addStudent(pers1);
classRoom.addStudent(pers2);

console.log(classRoom);