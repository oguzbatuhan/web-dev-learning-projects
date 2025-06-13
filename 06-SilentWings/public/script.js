const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    navbar.classList.add("menu");
  } else {
    navbar.classList.remove("menu");
  }
});
