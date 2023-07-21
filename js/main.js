//toggleClasses

const toggleLink = document.querySelector(".header__link.toggle");
const toggleBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const bodyLock = document.querySelector("body");
const closingSubMenu = document.querySelector(".header__submenu");
const headerArrows = document.querySelectorAll(".header__link.toggle .arrow");
const footerToggleLink = document.querySelector(".footer__link.toggle");
const footerSubMenu = document.querySelector(".footer__submenu");
const footerArrow = document.querySelector(".footer__link.toggle .arrow");

function toggleClass(link, burger, menu, body, submenu, arrows) {
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    submenu.classList.toggle("active");
    arrows.forEach((arrow) => arrow.classList.toggle("active"));
  });

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  });

  function closeSubMenu() {
    submenu.classList.remove("active");
    footerSubMenu.classList.remove("active");
    arrows.forEach((arrow) => arrow.classList.remove("active"));
  }

  submenu.addEventListener("mouseleave", closeSubMenu);
  footerSubMenu.addEventListener("mouseleave", closeSubMenu);
}

footerToggleLink.addEventListener("click", function (event) {
  event.preventDefault();
  footerSubMenu.classList.toggle("active");
  footerArrow.classList.toggle("active");
});

toggleClass(
  toggleLink,
  toggleBurger,
  headerMenu,
  bodyLock,
  closingSubMenu,
  headerArrows
);
