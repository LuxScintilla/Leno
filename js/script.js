document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");
  mobileToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  }
  if (window.scrollY === 0) {
    navbar.classList.remove("navbar--scroll");
  }
});
