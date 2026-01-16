//1
const a = 7;
const b = 9;
console.log(a * b);

//2
const c = 7;
const d = 9;
document.querySelector("div.out-2").textContent = `${c / d}`;

//3
const e = 3;
const f = 5;
document.querySelector("div.out-3").textContent = `${e + f}`;

//4
const e1 = "3";
const f1 = 5;
document.querySelector("div.out-4").textContent = `${e1 + f1}`;

//5
const e2 = 3;
const f2 = 0;
document.querySelector("div.out-5").textContent = `${e2 / f2}`;

//6
const e3 = 3;
const f3 = "Hello";
document.querySelector("div.out-6").textContent = `${e3 + f3}`;

//7
const e4 = 3;
const f4 = "Hello";
document.querySelector("div.out-7").textContent = `${e4 * f4}`;

//8
const b8 = document.querySelector("button.b-8");
const inp8 = document.querySelector("input.i-8");
const out8 = document.querySelector("div.out-8");
b8.onclick = t8;

function t8() {
  out8.textContent = inp8.value;
}

//9
const b9 = document.querySelector("button.b-9");
const inp9 = document.querySelector("input.i-9");
const out9 = document.querySelector("div.out-9");
b9.onclick = t9;

function t9() {
  out9.textContent = inp9.value;
  inp9.value = "";
}

//10
const b10 = document.querySelector("button.b-10");
const inp10 = document.querySelector("input.i-10");
const out10 = document.querySelector("div.out-10");
b10.onclick = t10;

function t10() {
  out10.textContent = inp10.value * 20;
  inp10.value = "";
}

//11
const b11 = document.querySelector("button.b-11");
const inp11 = document.querySelector("input.i-11");
const out11 = document.querySelector("div.out-11");
b11.onclick = t11;

function t11() {
  out11.textContent = inp11.value + 55;
  inp11.value = "";
}

//12
const b12 = document.querySelector("button.b-12");
const inp12v1 = document.querySelector("input.i-12-1");
const inp12v2 = document.querySelector("input.i-12-2");
const out12 = document.querySelector("div.out-12");
b12.onclick = t12;

function t12() {
  out12.textContent = `Hello ${inp12v1.value} ${inp12v2.value}`;
  inp12v1.value = "";
  inp12v2.value = "";
}

//13
const b13 = document.querySelector("button.b-13");
const inp13v1 = document.querySelector("input.i-13-1");
const inp13v2 = document.querySelector("input.i-13-2");
const out13 = document.querySelector("div.out-13");
b13.onclick = t13;

function t13() {
  const a = Number.parseInt(inp13v1.value);
  const b = Number.parseInt(inp13v2.value);

  out13.textContent = a + b;
  inp13v1.value = "";
  inp13v2.value = "";
}

//14
const b14 = document.querySelector("button.b-14");
const inp14 = document.querySelector("input.i-14");
b14.onclick = t14;

function t14() {
  inp14.value = "Go";
}

//15
const b15 = document.querySelector("button.b-15");
const inp15 = document.querySelector("input.i-15");
b15.onclick = t15;

function t15() {
  inp15.style.border = "4px solid red";
}

//16
const b16 = document.querySelector("button.b-16");
const inp16v1 = document.querySelector("input.i-16-1");
const inp16v2 = document.querySelector("input.i-16-2");
const out16 = document.querySelector("div.out-16");
b16.onclick = t16;

function t16() {
  out16.textContent = inp16v1.value + inp16v2.value;
  inp16v1.value = "";
  inp16v2.value = "";
}

//17
const but17 = document.querySelector("button.b-17");
but17.onclick = t17;
const inp17 = document.querySelector("input.i-17");
const out17v1 = document.querySelector("div.out-17-1");
const out17v2 = document.querySelector("div.out-17-2");
const out17v3 = document.querySelector("div.out-17-3");

function t17() {
  out17v1.textContent = +inp17.value;
  inp17.value = "";
}

//18
const but18 = document.querySelector("button.b-18");
but18.onclick = t18;
const inp18 = document.querySelector("input.i-18");
const out18 = document.querySelector("div.out-18");

function t18() {
  const a = Number.parseFloat(inp18.value);
  out18.textContent = a;
  inp18.value = "";
}

//19
const but19 = document.querySelector("button.b-19");
const inp19v1 = document.querySelector("input.i-19-1");
const inp19v2 = document.querySelector("input.i-19-2");
const out19 = document.querySelector("div.out-19");
but19.onclick = t19;

function t19() {
  out19.textContent =
    Number.parseInt(inp19v1.value) + Number.parseInt(inp19v2.value);
  inp19v1.value = "";
  inp19v2.value = "";
}
//20
const but20 = document.querySelector("button.b-20");
const out20 = document.querySelector("div.out-20");
let i = 0;
but20.onclick = t20;

function t20() {
  out20.textContent = `Clicks: ${++i}`;
}
