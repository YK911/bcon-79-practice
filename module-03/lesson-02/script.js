// Task 1
// Напишіть функцію fn1, яка при натисканні кнопки виводить в .out-1 змінну a1.
let a1 = 8;

const b1 = document.querySelector("button.b-1");
const out1 = document.querySelector("div.out-1");
b1.onclick = f1;

function f1() {
  out1.textContent = a1;
}
// Task 2

// Змінимо задачу 1. Зараз вона тільки виводить змінну в заздалегідь заданий блок.
// Давайте зробимо так, щоб функція була більш гнучкою.
// Нехай тепер функція fn2 повертає (return) змінну a2.
// Оскільки функція повертає змінну, то ім'я функції з дужками (виклик функції) можна вбудовувати у вирази.
// Зверніть увагу, як змінюється виклик функції тепер.
let a2 = 8;

document.querySelector(".b-2").onclick = function () {
  document.querySelector(".out-2").textContent = fn2();
  // а навіщо? А ось
  console.log(5 + fn2()); // тут виведе 13
  console.log(6 * fn2()); // тут 48
  // console.log(t2() * fn2() * fn2()); // 512
};

function fn2() {
  return a2;
}

// Task 3.
// Наша попередня функція все ще сильно залежить від зовнішніх змінних.
// Давайте зробимо її більш універсальною.
// Нехай функція fn3 приймає 2 аргументи і повертає (return) їх добуток.
// Допишіть код функції так, щоб вона повертала добуток двох чисел, переданих їй як аргументи a, b.
// Протестуємо функцію на двох прикладах за допомогою кнопок .b-3-1 та .b-3-2.

// const b3v1 = document.querySelector("button.b-3-1");
// const b3v2 = document.querySelector("button.b-3-2");
// const out3v1 = document.querySelector("div.out-3-1");
// const out3v2 = document.querySelector("div.out-3-2");
document.querySelector("button.b-3-1").onclick = () => document
.querySelector("div.out-3-1").textContent = fn3(3, 4);
document.querySelector("button.b-3-2").onclick = () => document
.querySelector("div.out-3-2").textContent = fn3(5, 6);

function fn3(param1, param2) {
  return param1 * param2;
}


// Task 4
// Напишіть функцію fn4, яка приймає ваш рік народження та обчислює (повертає) ваш вік.
document.querySelector("button.b-4").onclick = () => document
.querySelector("div.out-4").textContent = fn4(1990);

function fn4(param) {
  return new Date().getFullYear() - param;
}

// Task 5
// Напишіть функцію fn5, яка приймає ваше ім'я як параметр і повертає (return) кількість символів у ньому,
// де name — прийняте як параметр ім'я. Довжину (кількість символів) можна порахувати, використовуючи властивість length.
document.querySelector("button.b-5").onclick = () => document
.querySelector("div.out-5").textContent = fn5("Artem");

function fn5(name) {
  return name.length;
}

// Task 6
// Напишіть функцію fn6, яка приймає 2 числа і повертає випадкове ціле число від першого до другого прийнятого параметра.
// Увага, це перша задача, рішення якої потрібно знайти в Google!
document.querySelector("button.b-6").onclick = () => document
.querySelector("div.out-6").textContent = fn6(1, 200);

function fn6(n1, n2) {
  return Math.floor(Math.random() * (n2 - n1 +1)) + n1;
}

// Task 7
// Напишіть функцію fn7, яка повертає випадковий колір у форматі rgb(x,y,z) (рядок).
// Де x, y, z — випадкові числа в діапазоні [0, 255].
document.querySelector("button.b-7").onclick = () => document
.querySelector("div.out-7").style.backgroundColor = fn7();

function fn7() {
  return `rgb(${fn6(0,255)},${fn6(0,255)},${fn6(0,255)})`;
}


// function fn7() {
  // отже, одна зі складних задач. Нам потрібно
  // зробити такий рядок
  // rgb(33,123,255) - числа можуть бути будь-які від 0 до 255
  // без пробілів, через коми 33,123,255
  // у вас є функція fn6, яка може генерувати випадкові цілі числа в потрібному діапазоні.
  // давайте скористаємося нею. Просто запустимо її тричі всередині рядка нижче
  // return `rgb(${t6(0,255)}....допишіть самі
//}

//Task 8
// Напишіть функцію fn8, яка приймає рядок як параметр і повертає
// результат з очищеними пробілами на початку і в кінці рядка. Тобто
// приймає _hello_ (де знак _ символізує пробіл), а повертає hello. Для
// видалення пробілів використовуйте trim().
document.querySelector("button.b-8").onclick = () => console.log(fn8("   helo       "))

function fn8(param) {
  return param.trim();
}

//Task 9
// Напишіть функцію fn9, яка приймає число і повертає true, якщо число
// парне, і false, якщо непарне.
document.querySelector("button.b-9").onclick = () => document
.querySelector("div.out-9").textContent = fn9(9);

function fn9(number) {
  return number % 2 != 0 ? false : true;
}

//Task 10
// Створіть функцію fn10, яка приймає 2 числа і повертає більше з них. У
// разі рівності — перше.
document.querySelector("button.b-10").onclick = () => document
.querySelector("div.out-10").textContent = fn10(9, 10);

function fn10(n1, n2) {
  return n1 >= n2 ? n1 : n2;
}