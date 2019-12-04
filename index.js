
function ClassRoom(capacity = 32) {
    this.capacity = capacity;
    this.students = [];
    console.log(arguments);
    
}

ClassRoom.prototype.addStudent = function(student = {}) {
    console.log('mock');
    
}

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const pers1 = new Person('Bogdan', 'Buescu');
const pers2 = new Person('Mircea', 'Blendea');

const classRoom = new ClassRoom(3, 3, 4, 5, 6, 7, 8);

const classRoom1 = new ClassRoom();

classRoom1.addStudent();

classRoom.addStudent(pers1);

console.log(classRoom);
console.log(classRoom1);

