import { toggleImageColor } from "../utilities/toggleImageColor.js";
const switchEl = document.querySelector(".header__switch");
const switchBtn = document.querySelector(".switch__btn");
const switchIcons = document.querySelectorAll(".switch__icon");
const asideClose = document.querySelector(".aside__close");
const menuIcon = document.querySelector(".header__menuIcon");
const brandImg = document.querySelector(".home__brandImg");

const toggleMode = () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    switchBtn.classList.toggle("switch__btn--light");
    switchIcons[0].classList.toggle("switch__icon--visible");
    switchIcons[1].classList.toggle("switch__icon--visible");

    toggleImageColor(menuIcon, "header__menuIcon--lightmode");
    toggleImageColor(asideClose, "aside__close--lightmode");
    toggleImageColor(brandImg, "home__brandImg--lightmode");
};

switchEl.addEventListener("click", toggleMode);
