const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    navbar.classList.add("bg-black");
  } else {
    navbar.classList.remove("bg-black");
  }
});
