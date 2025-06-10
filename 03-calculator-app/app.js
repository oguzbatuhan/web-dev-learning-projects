const display = document.querySelector(".display span");
const btns = document.querySelectorAll(".btn.digit, .btn.operator");
const equals = document.querySelector(".btn.equals");
const clear = document.querySelector(".btn.clear");

let arry = [];
let number = "";

for (let btn of btns) {
  btn.addEventListener("click", () => {
    let data = btn.dataset.value;

    if (data == "+" || data == "-" || data == "*" || data == "/") {
      arry.push(number);
      arry.push(data);
      number = "";
    } else {
      number += data;
    }

    display.textContent += data;
  });
}

equals.addEventListener("click", () => {
  arry.push(number);
  number = "";
  let sonuc = arry[0];

  for (let i = 1; i < arry.length; i += 2) {
    if (arry[i] == "*" || arry[i] == "/") {
      if (arry[i] == "*") {
        sonuc = Number(sonuc) * Number(arry[i + 1]);
      } else {
        sonuc = Number(sonuc) / Number(arry[i + 1]);
      }
    } else {
      if (arry[i] == "+") {
        sonuc = Number(sonuc) + Number(arry[i + 1]);
      } else {
        sonuc = Number(sonuc) - Number(arry[i + 1]);
      }
    }
  }

  arry = [];
  display.textContent = sonuc;
});

clear.addEventListener("click", () => {
  display.textContent = "";
  arry = [];
});
