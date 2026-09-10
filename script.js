
                                /* HAMBURGER MENU TOGGLE */

                                
const navbarToggle = document.querySelector(".navbar-toggle");
const navLinks = document.querySelector(".nav-links");

navbarToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navbarToggle.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
  });
});