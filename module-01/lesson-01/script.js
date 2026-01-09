//1
console.log("Darth Vader");

//2
console.log(1);

//3
console.log('"Ласкаво " + " просимо " + " на курс"');

//4
// alert(2019);

//5
console.log(2019 - 200);

//6
const taskSix = document.getElementById("six");
taskSix.textContent = "Hello World!";

//7
const taskSeven = document.getElementById("seven");
taskSeven.textContent = `${12 * 12}`;

//8
const taskEight = document.querySelector("div.out-8");
taskEight.textContent = "task-8";

//9
const taskNine = document.querySelector("span.out-8");
taskNine.textContent = "world";

//10
const taskTen = document.querySelector("div.out-10");
taskTen.innerHTML = "<h2>Hi</h2>";

//11
const taskEleven = document.querySelector("div.out-11");
taskEleven.innerHTML = "123";
taskEleven.innerHTML += "456";

//12
const taskTwelve = document.querySelector("div.out-12");
taskTwelve.innerHTML = "<h2>3.1415</h2>";
console.log("🚀 ~ taskTwelve:", Number.parseFloat(taskTwelve.textContent));

//13
const out13 = document.querySelector("div.out-13");
out13.innerHTML =
  '<img src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a" alt="js" width="400" >';

//14
const z1 = 6;
const z2 = 3;
document.querySelector("div.out-14").textContent = `${z1 * z2}`;

//15
const y1 = 6;
const y2 = 3;
document.querySelector("div.out-15").textContent = `${y1 / y2}`;

//16
const x1 = "Hello";
const x2 = 5;
document.querySelector("div.out-16").textContent = `${x1 + x2}`;

//17
const out17 = document.querySelector("div.out-17");
console.log("🚀 ~ out17:", out17);

//18
let out18 = document.querySelector("div.out-18");
console.log("🚀 ~ out18:", out18);
out18 = 5;
console.log("🚀 ~ out18:", out18);

//19
let out19 = document.querySelector("div.out-19");
console.log("🚀 ~ out19:", out19);
out19 = document.querySelector("div.out-19-test");
console.log("🚀 ~ out19:", out19);

//20
const out20 = document.querySelector("div.out-20");
out20.textContent = "<h2>Hi</h2>";
console.log("🚀 ~ out20:", out20);
