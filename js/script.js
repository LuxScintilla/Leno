document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");
  mobileToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  const modal = document.querySelector(".modal");
  const videoPlayer = document.querySelector("#video-player");
  const videoButton = document.querySelector(".preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");

  videoButton.addEventListener("click", function () {
    modal.style.display = "block";
    videoPlayer.src = "https://www.youtube.com/embed/8mJQbzoIIw8";
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    videoPlayer.src = "";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      videoPlayer.src = "";
    }
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
