/*
var number = 5;
var text = 'Hello from js';
var double = 3.14;
var person = {};
var list = [];

console.log('number: ', number);
console.log('text: ', text);
console.log('double: ', double);
console.log('person: ', person);
console.log('list: ', list);

var number = 'not a number';

console.log('second number: ', number);
*/
/*
const person = {};
person.firstName = 'Bogdan';
person.lastName = 'Buescu';

// person.firstName = {};

const pers1 = {
    firstName: 'Alin',
    lastName: 'Matei'
};

console.log('person: ', person);

//primul exemplu - functioneaza doar codul de dupa comentat si cu codul de deasupra decomentat
const classRoom = [];

classRoom.push(person);
classRoom.push(pers1);

//test ce arata ca folosim referinta constantei pers1
pers1.firstName = 'Mircea';
pers1.lastName = 'Blendea';

classRoom.push(pers1);

console.log('classRoom: ', classRoom);
*/

//exemplul al doilea: - folosim constructor pentru obiectul Person

/*

const classRoom = [];


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const pers1 = new Person('Bogdan', 'Buescu');
const pers2 = new Person('Mircea', 'Blendea');

classRoom.push(pers1);
classRoom.push(pers2);

console.log(classRoom);
*/

function ClassRoom(capacity = 32) {
    this.capacity = capacity //|| 32;
    this.students = [];
    // this.addStudent = function (student) {
    //     this.students.push(student);
    // }
}

ClassRoom.prototype.addStudent = function (student = {}) {
    this.students.push(student);
}


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const pers1 = new Person('Bogdan', 'Buescu');
const pers2 = new Person('Mircea', 'Blendea');


const classRoom = new ClassRoom(3);
const classRoom1 = new ClassRoom();

classRoom.addStudent(pers1);
classRoom.addStudent(pers2);

// classRoom1.addStudent = function () {
//     console.log('mock function');
    
// }

classRoom1.addStudent();

console.log(classRoom);
console.log(classRoom1);


