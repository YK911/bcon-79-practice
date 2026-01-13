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
