const profession = document.querySelector(".header__profession");

const moveProfession = () => {
  const currentScrollY = window.scrollY;
  if (window.innerWidth > 600) {
    if (currentScrollY < 350) {
      profession.style.marginRight = currentScrollY + "px";
    }
  } else if (window.innerWidth < 480) {
    if (currentScrollY < 200){
      profession.style.transform = "translateY(-" + currentScrollY +  "px";
    }
  }
};

window.addEventListener("scroll", moveProfession);
