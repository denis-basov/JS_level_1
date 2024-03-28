// let nums = [1, 2, 3];
// console.log(nums);

// получаем элемент
// let header = document.querySelector('h1');
// console.dir(header);
/*
let user = {
  fName: "Иван",
  lName: "Иванов",
};
*/

// конструктор
// 1 создает пустой объект
// 2 создает указанные свойства объекта и дает возможность
// присвоить свойствам объекта значения параметров функции
// 3 возвращает созданный объект
// 4 создает прототип для объекта
let User = function (fName, lName, age, group) {
  // свойства будущего объекта
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.group = group;

  // методы - не делайте так
  /*
  this.printName = function () {
    console.log(`Имя: ${this.firstName}. Фамилия: ${this.lastName}`);
  };*/
};
/*
// создаем объекты по шаблону функции-конструктора
let user1 = new User("Иван", "Иванов", 16, 45);
let user2 = new User("Анна", "Петрова", 17, 43);

// записываем в прототип метод
User.prototype.printName = function () {
  console.log(`Имя: ${this.firstName}. Фамилия: ${this.lastName}`);
};

console.log(user1);
console.log(user2);
//console.log(User.prototype);

// вызываем метод из ПРОТОТИПА - родителя
user1.printName();
user2.printName();
*/

/**
 * Классы
 */
class Student {
  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }

  printName() {
    return this.fName;
  }

  getUserInfo() {
    return `<h1>Имя: ${this.fName}. Фамилия: ${this.lName}. Возраст: ${this.age} лет.</h1>`;
  }
}

// создаем объект по шаблону класса
let student1 = new Student("Анна", "Петрова", 22);
let student2 = new Student("Светлана", "Иванова", 19);

console.log(student1);
//console.log(student2);

// console.log(`Имя: ${student1.printName()}!`);
// console.log(student1.fName);

//let usserData = student2.getUserInfo();
//document.write(usserData);

// дочерний класс
class NewStudent extends Student {
  constructor(fName, lName, age, schoolNumber) {
    super(fName, lName, age); // вызываю конструктор родительского класса
    this.schoolNumber = schoolNumber;
  }

  // переопределяем метод родительского класса
  getUserInfo() {
    return `<h1>Имя: ${this.fName}. Фамилия: ${this.lName}. Возраст: ${this.age} лет.
    Номер школы: ${this.schoolNumber}.</h1>`;
  }
}

let student3 = new NewStudent("Сергей", "Иванов", 15, 43);
console.log(student3);
document.write(student3.getUserInfo());
