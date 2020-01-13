<<<<<<< HEAD
// function classRoom(capacity = 32) {
//   this.capacity = capacity;
//   this.students = [];
// }

// classRoom.prototype.addStudent = function(student = {}) {
//   this.students.push(student);
// };

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const pers1 = new Person("Bogdan", "Bunescu");
// const pers2 = new Person("Mircea", "Blendea");

// const classRoom1 = new classRoom(3);
// const classRoom2 = new classRoom();

// classRoom1.addStudent(pers1);
// classRoom1.addStudent(pers2);

// classRoom2.addStudent(pers1);
// classRoom2.addStudent(pers2);

// console.log(classRoom1);
// console.log(classRoom2);

class Utils {
  constructor(start = 0) {
    this.current = start;
  }

  increment() {
    console.log(++this.current);
  }

  showThis() {
    console.log(this);
  }
}

const utils = new Utils();

utils.increment();
utils.increment();
utils.showThis();

utils.increment.apply({ current: 4 });

utils.increment();

utils.increment.call({ current: 100 });

utils.showThis();
