const hamburger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

new WOW().init();
