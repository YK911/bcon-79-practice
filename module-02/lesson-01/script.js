// Task 1
// При натисканні кнопки .b-1 спрацьовує функція f1. Функція повинна прочитати вміст .i-1 і порівняти його з числом 4 (порівняння ==). Результат порівняння - true або false виведіть у .out-1.
const b1 = document.querySelector("button.b-1");
const inp1 = document.querySelector("input.i-1");
const out1 = document.querySelector("div.out-1");
b1.onclick = f1;

function f1() {
  out1.textContent = inp1.value == 4;
  inp1.value = "";
}

// Task 2
// Дані дві змінні a21 і a22. При натисканні кнопки .b-2, запускається функція f2. Функція повинна порівняти змінні за допомогою if else і вивести в .out-2 число, яке більше. Варіант рівності змінних не розглядаємо.

let a21 = 45;
let a22 = 32;

const b2 = document.querySelector("button.b-2");
const out2 = document.querySelector("div.out-2");
b2.onclick = f2;

function f2() {
  if (a21 > a22) {
    out2.textContent = a21;
  } else {
    out2.textContent = a22;
  }
}

// Task 3
// Дані 2 input - .i-31 і .i-32, обидва - input[type=number]. При натисканні кнопки .b-3 спрацьовує функція f3. Функція повинна порівняти числа з input, вивести в .out-3 більше число.
// Проведіть самостійний тест роботи, введіть пари чисел 4 і 9, 9 і 22, 5 і 111.
const b3 = document.querySelector("button.b-3");
const inp3v1 = document.querySelector("input.i-31");
const inp3v2 = document.querySelector("input.i-32");
const out3 = document.querySelector("div.out-3");
b3.onclick = f3;

function f3() {
  if (+inp3v1.value > +inp3v2.value) {
    out3.textContent = inp3v1.value;
  } else {
    out3.textContent = inp3v2.value;
  }
  inp3v1.value = "";
  inp3v2.value = "";
}

// Task 4.
// Користувач вводить в .i-4 рік свого народження. Є кнопка .b-4, яка запускає функцію f4. Функція повинна вивести в .out-4 число 1, якщо користувачеві більше або дорівнює 18 років, і 0, якщо менше.
const b4 = document.querySelector("button.b-4");
const inp4 = document.querySelector("input.i-4");
const out4 = document.querySelector("div.out-4");
b4.onclick = f4;

function f4() {
  const currentYear = new Date().getFullYear();
  // console.log("🚀 ~ t4 ~ currentYear:", currentYear);
  // console.log("🚀 ~ t4 ~ age:", (currentYear - inp4.value));
  out4.textContent = (currentYear - inp4.value) < 18 ? 0 : 1;
}

// Task 5.
// На сторінці є input з класом i-5, куди користувач може ввести число. Є кнопка b-5, яка запускає функцію f5. Функція повинна вивести в .out-5 символ 'm' - якщо число менше нуля, 0 - якщо число дорівнює нулю, і число 1 - якщо більше.
const b5 = document.querySelector("button.b-5");
const inp5 = document.querySelector("input.i-5");
const out5 = document.querySelector("div.out-5");
b5.onclick = f5;

function f5() {
  out5.textContent = inp5.value < 0 ? "m" : inp5.value > 0 ? 1 : 0;
}

// Task 6.
// На сторінці є input з класом i-6, куди користувач може ввести число. Є кнопка .b-6, яка запускає функцію f6. Функція повинна вивести в .out-6 слово even, якщо число парне, і odd, якщо непарне. Для перевірки парності використовується цілочисельна остача від ділення на 2 (оператор %). Якщо остача дорівнює нулю - парне, ні - непарне.
const b6 = document.querySelector("button.b-6");
const inp6 = document.querySelector("input.i-6");
const out6 = document.querySelector("div.out-6");
b6.onclick = f6;

function f6() {
  out6.textContent = (inp6.value % 2) === 0 ? "even" : "odd";
}

// Task 7.
// Дані 2 input - .i-71 і .i-72, обидва - input[type=number]. При натисканні кнопки .b-7 спрацьовує функція f7. Функція повинна число з .i-71 піднести до степеня .i-72, вивести результат в .out-7. Для піднесення до степеня можна використовувати **, або Math.pow.
const b7 = document.querySelector("button.b-7");
const inp7v1 = document.querySelector("input.i-71");
const inp7v2 = document.querySelector("input.i-72");
const out7 = document.querySelector("div.out-7");
b7.onclick = f7;

function f7() {
    out7.textContent = inp7v1.value ** inp7v2.value;
}

// Task 8.
// Дано select s-8, який містить 3 значення: 1, 2, 3. Дана кнопка b-8. При її натисканні спрацьовує функція f8. Функція повинна отримати обране в select число, потім за допомогою switch case порівняти його по черзі з 1, 2, 3. І якщо вибрано число 1, то вивести в .out-8 рядок one, якщо 2 - two, якщо 3 - three. Нагадую - це програмування. Як зазначено в завданні - так і виводимо. Тобто Three з великої літери - помилка!
const b8 = document.querySelector("button.b-8");
const s8 = document.querySelector("select.s-8");
const out8 = document.querySelector("div.out-8");
b8.onclick = f8;

function f8() {
  // console.log(+s8.selectedOptions[0].value)
  switch (+s8.selectedOptions[0].value) {
    case 1:
      out8.textContent = "one";
      break;
    case 2:
      out8.textContent = "two";
      break;
    case 3:
      out8.textContent = "three";
      break;
    default:
      console.log("error enter");
      break;
  }
}

// Task 9
// Є input з класом .i-9, куди користувач може ввести номер квартири. Є кнопка .b-9, яка запускає функцію f9. Функція повинна вивести в .out-9 номер під'їзду, в якому знаходиться квартира.
//  якщо від 1 включно до 32 включно - то вивести цифру 1
//  якщо від 33 (включно) до 43 (включно) - то вивести 2
//  якщо від 44 (включно) до 64 (включно) - то 3.
//  В іншому випадку, вивести 0.
const b9 = document.querySelector("button.b-9");
const inp9 = document.querySelector("input.i-9");
const out9 = document.querySelector("div.out-9");
b9.onclick = f9;

function f9() {
  const numberFlat = +inp9.value;
  if (numberFlat >= 1 && numberFlat <= 32) {
    out9.textContent = 1;
  } else if (numberFlat >= 33 && numberFlat <= 43) {
    out9.textContent = 2;
  } else if(numberFlat >= 44 && numberFlat <= 64) {
    out9.textContent = 3;
  } else {
    out9.textContent = 0;
  }
}

// Task 10
// Дано select .s-100. Після натискання кнопки, виведіть value обраного option в .out-10.
const b10 = document.querySelector("button.b-10");
const s10 = document.querySelector("select.s-100");
const out10 = document.querySelector("div.out-10");
b10.onclick = f10;

function f10() {
  out10.textContent = s10.selectedOptions[0].value;
}

// Task 11
// Дано select .s-110. При зміні стану select (подія onchange) виведіть value обраного option в .out-11.
// const b10 = document.querySelector("button.b-10");
const s11 = document.querySelector("select.s-110");
const out11 = document.querySelector("div.out-11");
s11.onchange = f11;

function f11() {
  out11.textContent = s11.selectedOptions[0].value;
}

// Task 12
// Дано input .i-120. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в .out-12 typeof отриманої змінної. Typeof дозволяє визначити тип даних.
const b12 = document.querySelector("button.b-12");
const inp12 = document.querySelector("input.i-120");
const out12 = document.querySelector("div.out-12");
b12.onclick = f12;

function f12() {
  const tmp = inp12.value;
  out12.textContent = typeof tmp;
}

// Task 13
// Дано input i-130. На відміну від попереднього завдання - input[type="number"]. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в out-13 typeof отриманої змінної. Typeof дозволяє визначити тип даних. Якщо ви правильно все зробили - то дивно, але тип даних буде string! Подумайте чому так?
const b13 = document.querySelector("button.b-13");
const inp13 = document.querySelector("input.i-130");
const out13 = document.querySelector("div.out-13");
b13.onclick = f13;

function f13() {
  const tmp = inp13.value;
  out13.textContent = typeof tmp;
}

// Task 14
// Дано input .i-141 і .i-142, [type=number]. Дано select .s-143, який містить чотири операції - +, -, *, / . Дана кнопка b-14, при натисканні на яку спрацьовує функція f14. Функція виводить в .out-14 результат операцій, обраних в 3-му select, до чисел, введених в першому і другому input. Наприклад вибрано 1 13 +, потрібно вивести результат операції 1+13 тобто 14.
const b14 = document.querySelector("button.b-14");
const inp14v1 = document.querySelector("input.i-141");
const inp14v2 = document.querySelector("input.i-142");
const s14 = document.querySelector("select.s-143");
const out14 = document.querySelector("div.out-14");
b14.onclick = f14;

function f14() {
  const tmpA = +inp14v1.value;
  const tmpB = +inp14v2.value;
  switch (s14.selectedOptions[0].value) {
    case "+":
      out14.textContent = tmpA + tmpB;
      break;
    case "-":
      out14.textContent = tmpA - tmpB;
      break;
    case "*":
      out14.textContent = tmpA * tmpB;
      break;
    case "/":
      out14.textContent = tmpA / tmpB;
      break;
    default:
      console.log("enter error");
      break;
  }
}

// Task 15
// Дано select .s-151 і .s-152, кожен з яких містить 1 і 0. Дано select .s-153, який містить дві операції - && і || . Дана кнопка .b-15, при натисканні на яку спрацьовує функція f15. Функція виводить в .out-15 результат логічних операцій, обраних в 3 select, до чисел, обраних в першому і другому select. Наприклад, вибрано 1 1 &&, потрібно вивести результат операції 1&&1 тобто 1 або 0.
const b15 = document.querySelector("button.b-15");
const s15v1 = document.querySelector("select.s-151");
const s15v2 = document.querySelector("select.s-152");
const s15v3 = document.querySelector("select.s-153");
const out15 = document.querySelector("div.out-15");
b15.onclick = f15;

function f15() {
  const tmpA = +s15v1.value;
  const tmpB = +s15v2.value;
  const tmpC = s15v3.value;
  out15.textContent = tmpC === "&&" ? tmpA && tmpB : tmpC === "||" ? tmpA || tmpB : "Error";
}