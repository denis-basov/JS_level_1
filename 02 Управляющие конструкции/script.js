/*
let age = 55; // обявляю переменную age и присваиваю значение 22
let fName = "Иван";
let lName = "Иванов";
*/

// age = age + 5;
// age += 5;
// console.log(age);

// = присваивание
// == сравнение
// === строгое сравнение

/*
let age = 12;

// если возраст больше или равен 21
if (age >= 21) {
  console.log("Добро пожаловать!");
}
*/

/*
let isRainyNow = false; // true | false

// если идет дождь
if (isRainyNow === true) {
  // беру зонт
  console.log("беру зонт");
}
*/

/*
let isRainyNow = true; // true | false

// если идет дождь
if (isRainyNow) {
  // беру зонт
  console.log("беру зонт");
}
*/

/*
let children = 0; // 0, 3, 4

// если есть дети
if (children > 0) {
  // приглашаем детей в зоопарк
  console.log("Добро пожаловать в зоопарк");
}
*/

/**
 * псевдоложные значения - приводятся к false
 * 0, "", null, undefined, NaN, false
 * все остальные - true
 */
/*
let children = ""; // 0, 3, 4

// если есть дети
if (children) {
  // приглашаем детей в зоопарк
  console.log("Добро пожаловать в зоопарк");
}
*/

/*
let age = 44;

// если возраст больше или равен 21
if (age >= 21) {
  console.log("Добро пожаловать!");
} else {
  // иначе
  console.log("Доступ заперщен!");
}
*/

/*
let age = 11;

// если возраст >= 18
if (age >= 18) {
  console.log("Вы уже почти взрослый");
} else if (age >= 14) {
  // если возраст >= 14
  console.log("Вы уже тинейджер");
} else {
  console.log("Подрасти");
}
*/

/*
// тернарный оператор
let age = 44;

if (age >= 21) {
  console.log("Добро пожаловать!");
} else {
  console.log("Доступ заперщен!");
}

age >= 21 ? console.log("Добро пожаловать!") : console.log("Доступ заперщен!");
*/

/**
 * циклы
 */
/*
let num = 1;

while (num <= 5) {
  console.log(num);
  //num = num + 1; // увеличиваем значение num на 1
  //num += 1;
  num++;
}
console.log("Конец цикла");
*/

/*
let num = 10;
while (num >= 0) {
  console.log(num);
  num--; // уменьшение на 1
}
console.log("Конец цикла");
*/

/*
for (let num = 0; num < 5; num++) {
  console.log(num);
}
*/
/*
// вывести четные числа от 0 до 100
for (let num = 0; num <= 100; num++) {
  console.log(num);
}
*/

/*
for (let num = 0; num <= 100; num += 5) {
  console.log(num);
}*/

/*
for (let i = 20; i >= 0; i--) {
  console.log(i);
}
*/

/*
let name = 'David';
let greet = "<h2 class='head'>Hello, user</h2>";

console.log(greet);
document.write(greet);
*/

/*
let fName = "David";
let greet = `<h2 class='head'>Hello, ${fName}</h2>`;

console.log(greet);
document.write(greet);
*/

/**
 * ДЗ
 */
// 5 Выведите в косоль только четные числа. Диапазон перебираемых чисел от 3 до 100.
/*
for (let i = 3; i <= 100; i++) {
  // если число четное, выводим его в консоль
  if (i % 2 === 0) {
    console.log(i);
  }
}
*/
/*
// && - логическое И
// || - логическое ИЛИ
// ! - логическое отрицание

let numClock = 14;
// 1 четверть от 0 до 15
if(numClock > 0 && numClock <= 15 ){
  console.log('1 четверть');
}
*/

/*
// 9* Напишите цикл, который считает сумму чисел от 1 до 10.
let result = 0; // начальное значение для суммы
for (let i = 1; i < 10; i++) {
  //  console.log(i);
  result += i; // накаждой итерации кладем текущее значение переменной i
  //console.log(result);
}
console.log(result);
*/

/*
// 9* Напишите цикл, который считает произведение чисел от 1 до 10.
let result = 1; // начальное значение для суммы
for (let i = 1; i < 10; i++) {
  //  console.log(i);
  result *= i; // накаждой итерации кладем текущее значение переменной i
  //console.log(result);
}
console.log(result);
*/
/**
 * конец ДЗ
 */

/*
// прерываение цикла - break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // прерываем цикл
  }
  console.log(i);
}
*/

/*
// переход к следующей итерации цикла - continue
// вывод четных чисел
for (let i = 0; i <= 100; i++) {
  // если число НЕчетное, переходим к след итерации
  if (i % 2 === 1) {
    continue; // к следующей итерации цикла
  }
  console.log(i);
}
*/

// let students = ["Иван", "Анна", "Сергей", "Инна", "Павел"];
// let numbers = [4, 5, 7, 3, 5, 7, 8];
/*
console.log(students);
console.log(students[0]);
console.log(students[2]);

console.log(numbers[2]);
*/
//document.write(students);

// document.write(students[0]);
// document.write(students[1]);
// document.write(students[2]);
// console.log(students);
// console.log(students.length); // получаем длину массива
/*
for (let i = 0; i < students.length; i++) {
  //console.log(i);
  console.log(students[i]);
  document.write(`<h3>${students[i]}</h3>`);
}
*/
/*
let fName = "Иван" + " ";
console.log(fName);
*/

/**
 * for ... of
 */

/*
let students = ["Иван", "Анна", "Сергей", "Инна", "Павел"];
let numbers = [4, 5, 7, 3, 5, 7, 8];
*/

/*
for (let student of students) {
  console.log(student);
  document.write(`<h2>${student}</h2>`);
}

for (let number of numbers) {
  console.log(number);
  document.write(`<h2>${number}</h2>`);
}
*/

// получить из массива строк одну строку
/*
let studentsStr = "";
for (let student of students) {
  studentsStr += student + " ";
}
console.log(studentsStr);
document.write(`<h2>${studentsStr}</h2>`);
*/
