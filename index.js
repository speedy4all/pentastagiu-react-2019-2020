function ClassRoom(capacity = 18) {
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

const pers1 = new Person('Ionut','Cristinel');
const pers2 = new Person('Mircea','Blendea');

const classRoom = new ClassRoom(3, 5, 7);

classRoom.addStudent(pers1);
classRoom.addStudent(pers2);

console.log(classRoom);
