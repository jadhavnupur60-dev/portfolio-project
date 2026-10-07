// Interactive Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("#menu-toggle");
  const navMenu = document.querySelector("#nav-menu");

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      navMenu.classList.toggle("is-active");
    });
  }
});