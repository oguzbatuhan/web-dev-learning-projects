const display = document.querySelector(".display span");
const btns = document.querySelectorAll(".btn.digit, .btn.operator");
const equals = document.querySelector(".btn.equals");
const clear = document.querySelector(".btn.clear");

let deger = "";

for (let btn of btns) {
  btn.addEventListener("click", () => {
    deger += btn.getAttribute("data-value");
    display.textContent = "";
    display.textContent += deger;
  });
}

equals.addEventListener("click", () => {
  try {
    display.textContent = "";
    deger = eval(deger);
    display.textContent = deger;
  } catch {
    display.textContent = "Erorr";
  }
});

clear.addEventListener("click", () => {
  deger = "";
  display.textContent = "";
});
