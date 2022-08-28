/*===== Moblie MENU =====*/
const triggerMenu = document.querySelector("#trigger-menu"),
  mobileMenuCon = document.querySelector("#menu-mobile-container"),
  closeMobileMenu = document.querySelector("#menu-mobile-container .dark-part");

triggerMenu.addEventListener("click", () => {
  mobileMenuCon.classList.add("active");
});
closeMobileMenu.addEventListener("click", () => {
  mobileMenuCon.classList.remove("active");
});

/*===== GSAP ANIMATION =====*/
// NAV

// Hero

// About
