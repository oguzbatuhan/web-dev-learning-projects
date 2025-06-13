const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar ul li a");
const currentPage = window.location.pathname.split("/").pop();

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    navbar.classList.add("menu");
  } else {
    navbar.classList.remove("menu");
  }
});

navLinks.forEach((link) => {
  const linkHref = link.getAttribute("href").split("/").pop();

  if (
    linkHref === currentPage ||
    (linkHref === "index.html" && currentPage === "")
  ) {
    link.classList.add("active");
  }
});
