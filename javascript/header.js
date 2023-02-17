const profession = document.querySelector(".header__profession");

const moveProfession = () => {
  const currentScrollY = window.scrollY;
  currentScrollY < 400 &&  (profession.style.marginRight = -currentScrollY + "px");
};

window.addEventListener("scroll", moveProfession);
