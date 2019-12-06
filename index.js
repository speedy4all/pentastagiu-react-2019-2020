function ClassRoom(capacity=24){
    this.capacity=capacity;
    this.students=[];
}

ClassRoom.prototype.addStudents = function(student){
     this.students.push(student);
}



function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

const pers1= new Person('mircea', 'popovici');
const pers2 = new Person('bogdan', 'mireanu');
const pers3= new Person('eduard', 'cosbuc');

const classroom = new ClassRoom();
const classroom2= new ClassRoom(32);

classroom.addStudents(pers1);
classroom.addStudents(pers2);
classroom2.addStudents(pers3);

console.log(classroom);
console.log(classroom2);