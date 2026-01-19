// Task 1
const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");
btn1.onclick = result1;
function result1() {
  let sum1 = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      sum1 += "*";
    }
    sum1 += "-";
  }

  out1.innerHTML += sum1;
}
// Task 2
const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");
btn2.onclick = result2;
function result2() {
  let total2 = "";
  for (let i = 1; i <= 3; i++) {
    total2 += i + "<br>";
    for (let j = 0; j < 3; j++) {
      total2 += "*_";
    }
    total2 += "<br>";
  }
  out2.innerHTML = total2;
}
// Task 3
const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");
btn3.onclick = fn3;
function fn3() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      out3.innerHTML += "*_";
    }
    out3.innerHTML += "<br>";
  }
}
// Task 4
const btn4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");
btn4.onclick = fn4;

function fn4() {
  for (let i = 1; i < 4; i++) {
    out4.innerHTML += `${i}_ `;
    for (let j = 1; j < 6; j++) {
      out4.innerHTML += `${j}* `;
    }
  }
}

// Task 5
const btn5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");

btn5.onclick = fn5;

function fn5() {
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 6; k++) {
      if (k % 2 === 0) {
        out5.innerHTML += 1;
      } else {
        out5.innerHTML += 0;
      }
    }
    out5.innerHTML += "<br>";
  }
}
// Task 6
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");

btn6.onclick = fn6;

function fn6() {
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 2; k++) {
      if (k % 2 === 0) {
        out6.innerHTML += "10x";
      } else {
        out6.innerHTML += "01x";
      }
    }
    out6.innerHTML += "<br>";
  }
}
// Task 7
const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");

btn7.onclick = fn7;

function fn7() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i === j) {
        break;
      }
      out7.innerHTML += "*";
    }
    out7.innerHTML += "<br>";
  }
}
// Task 8
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");

btn8.onclick = fn8;

function fn8() {
  for (let i = 5; i >= 0; i--) {
    for (let j = 0; j < 6; j++) {
      if (i === j) {
        break;
      }
      out8.innerHTML += "*";
    }
    out8.length === i;
    out8.innerHTML += "<br>";
  }
}
// Task 9
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");

btn9.onclick = fn9;
function fn9() {
  for (let i = 1; i < 7; i++) {
    for (let j = 1; j < 7; j++) {
      if (i === j) {
        break;
      }
      out9.innerHTML += `${j}_`;
    }
    out9.innerHTML += "<br>";
  }
}
// Task 10

const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");

btn10.onclick = fn10;
function fn10() {
  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 50; j++) {
      out10.innerHTML += `${j}_`;
    }
    out10.innerHTML += "<br>";
  }
}
