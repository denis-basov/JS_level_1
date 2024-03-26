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