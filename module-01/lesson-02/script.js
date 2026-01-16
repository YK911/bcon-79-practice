// №1
// const a = 7;
// const b = 9;
// const result  a * b;
// console.log("🚀 ~ result:", result)

// №2

// const c = 7;
// const d = 9;
// const result = c / d;
// const out2 = document.querySelector(".out-2");
// out2.textContent = result;
// console.log("🚀 ~ out2:", out2);

// // №3
// const e = 3;
// const f = 5;
// const out3 = document.querySelector(".out-3");
// console.log("🚀 ~ out3:", out3);

// out3.textContent = e + f;
// #4

const e1 = "3";
const f1 = 5;
const out4 = document.querySelector(".out-4");
out4.textContent = e1 + f1;

// #5
const e2 = "3";
const f2 = 5;
const out5 = document.querySelector(".out-5");
out5.textContent = e2 / f2;

// 6
const e3 = 3;
const f3 = "Hello";
const out6 = document.querySelector(".out-6");
out6.textContent = e3 + f3;

// #7
const e4 = 3;
const f4 = "Hello";
const out7 = document.querySelector(".out-7");
out7.textContent = e4 * f4;

// №8
const btn8 = document.querySelector(".b-8");
const input8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");
btn8.onclick = t8;
function t8() {
  out8.textContent = input8.value;
  // input8.value = "";
}

// #9

const btn9 = document.querySelector(".b-9");
const input9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");
btn9.onclick = t9;
function t9() {
  out9.textContent = input9.value;
  input9.value = "";
}

// todo

// const btn10 = document.querySelector(".b-10");
// const input10 = document.querySelector(".i-10");
// const out10 = document.querySelector(".out-10");

// btn10.onclick = t10;

// function t10() {
//   if (input10.value === "") {
//     alert('видите текст')
//     return
//   }
//   out10.textContent = input10.value * 20;
//   input10.value = "";
// }

// //  11
// const btn11 = document.querySelector(".b-11");
// const input11 = document.querySelector(".i-11");
// const out11 = document.querySelector(".out-11");

// btn11.onclick = t11;

// function t11() {
//   out11.textContent = input11.value + 55;
//   input11.value = "";
// }

// 12

// const btn12 = document.querySelector(".b-12");
// const inputName = document.querySelector(".i-12-1");
// const inputSurname = document.querySelector(".i-12-2");
// const out12 = document.querySelector(".out-12");

// btn12.onclick = t12;

// function t12() {
//   // out12.textContent = "Hello " + inputName.value + " " + inputSurname.value;
//   out12.textContent = `Hello ${inputName.value} ${inputSurname.value}`
// }

// //!  13
// const btn13 = document.querySelector(".b-13");
// const inputA = document.querySelector(".i-13-1");
// const inputB = document.querySelector(".i-13-2");
// const out13 = document.querySelector(".out-13");
// btn13.onclick = t13;

// function t13() {
//   const a = +inputA.value;
//   const b = +inputB.value;
//   out13.textContent = a + b;

// }

//! 14
// const btn14 = document.querySelector(".b-14");
// const inpunt14 = document.querySelector(".i-14");

// btn14.onclick = t14;

// function t14() {
//   inpunt14.value = "Go";
// }
//  todo

// const btn15 = document.querySelector(".b-15");
// const input15 = document.querySelector(".i-15");

// btn15.onclick = t15;

// function t15() {
//   input15.style.border = "4px solid red";
//   input15.placeholder = "Name";
//   input15.style.backgroundColor = "red";
// }
// const btn15 = document.querySelector(".b-15");
// const input15 = document.querySelector(".i-15");

// btn15.onclick = t15;

// function t15() {
//   input15.placeholder = 'Name';
// }

// #16
// const btn16 = document.querySelector(".b-16");
// const input16_1 = document.querySelector(".i-16-1");
// const input16_2 = document.querySelector(".i-16-2");
// const out16 = document.querySelector(".out-16");

// btn16.onclick = t16;
// function t16() {
//   out16.textContent = input16_1.value + input16_2.value;
// }

// №17
const btn17 = document.querySelector(".b-17");
const input17 = document.querySelector(".i-17");
const out17_1 = document.querySelector(".out-17-1");
const out17_2 = document.querySelector(".out-17-2");
const out17_3 = document.querySelector(".out-17-3");

btn17.onclick = t17;
function t17() {
  // const value = input17.value;
  out17_1.textContent = +input17.value;
  out17_2.textContent = parseInt(input17.value);
  out17_3.textContent = parseFloat(input17.value);
  input17.value = "";
}

// const btn18 = document.querySelector('.b-18');
// const input18 = document.querySelector('.i-18');
// const out18 = document.querySelector('.out-18');
//  btn18.onclick = t18

//  function t18(){
//    out18.textContent = +parseFloat(input18.value)
//   const a = input18.value;
//  }

const btn19 = document.querySelector(".b-19");
const input1 = document.querySelector(".i-19-1");
const input2 = document.querySelector(".i-19-2");
const out19 = document.querySelector(".out-19");

btn19.onclick = t19;

function t19() {
  const a = parseFloat(input1.value);
  const b = parseFloat(input2.value);

  out19.textContent = a + b;
  input1.value = "";
  input2.value = "";
}

// ! Fucnion declaration
// debugger
const btn20 = document.querySelector(".b-20");
const btn201 = document.querySelector(".b-20-1");

const out20 = document.querySelector(".out-20");
btn20.onclick = t20;
btn201.onclick = t201;
let totalClicks = 0;

function t20() {
  totalClicks += 1;
  renderResult(totalClicks);
}
function t201() {
  totalClicks -= 1;
  renderResult(totalClicks);
}

function renderResult(value) {
  out20.textContent = value;
}
