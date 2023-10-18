import handleHomeBrandImages from "../main/brand-image/handleBrandImage.js";
const switchEl = document.querySelector(".header__switch");
const switchBtn = document.querySelector(".switch__btn");
const switchIcons = document.querySelectorAll(".switch__icon");
const body = document.querySelector("body");

const switchMode = () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    switchBtn.classList.toggle("switch__btn--light");
    switchIcons[0].classList.toggle("switch__icon--visible");
    switchIcons[1].classList.toggle("switch__icon--visible");

    handleHomeBrandImages();
};

switchEl.addEventListener("click", switchMode);
