const profession = document.querySelector(".header__profession");
const body = document.querySelector("body");
const modeContainer = document.querySelector(".header__mode");
const darkMode = document.querySelector(".header__dark");
const toggleMode = document.querySelector(".header__toggleMode");
const lightMode = document.querySelector(".header__light");
const toggleBtn = document.querySelector(".header__toggleBtn");

const moveProfession = () => {
  const currentScrollY = window.scrollY;
  if (window.innerWidth > 600) {
    if (currentScrollY < 350) {
      profession.style.marginRight = currentScrollY + "px";
    }
  } else if (window.innerWidth < 480) {
    if (currentScrollY < 200) {
      profession.style.transform = "translateY(-" + currentScrollY + "px";
    }
  }
};

window.addEventListener("scroll", moveProfession);

const changeToDarkMode = () => {
  body.classList.add("darkMode");
  body.classList.remove("lightMode");
}

const changeToLightMode = () => {
  body.classList.add("lightMode");
  body.classList.remove("darkMode");
}

const handleMode = (e) => {
  if (e.target.classList.contains("header__dark")) {
    changeToDarkMode()
    toggleBtn.classList.remove("moveToggleBtnToLight");
  } else if (e.target.classList.contains("header__light")) {
    changeToLightMode()
    toggleBtn.classList.add("moveToggleBtnToLight");
  } else if (
    e.target.classList.contains("header__toggleMode") ||
    e.target.classList.contains("header__toggleBtn")
  ) {
    if (body.classList.contains("darkMode")) {
      changeToLightMode()
    } else {
      changeToDarkMode()
    }
    toggleBtn.classList.toggle("moveToggleBtnToLight");
  }
};

modeContainer.addEventListener("click", handleMode);
