const hamburgerIcon = document.querySelector(".hamburger-icon");
const navbarDropdown = document.querySelector(".dropdown-nav");
hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("hamburger-icon-click");
  navbarDropdown.classList.toggle("show");
});
window.addEventListener("resize", () => {
  const mediaQuery = window.matchMedia("(min-width:990px)");
  if (mediaQuery.matches) {
    navbarDropdown.classList.remove("show");
  }
});