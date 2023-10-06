const switchEl = document.querySelector(".header__switch");
const switchBtnEl = document.querySelector(".header__btn-switch");
const switchImgs = document.querySelectorAll(".header__img-switch");
const body = document.querySelector("body")

const switchMode = () => {
    body.classList.toggle("dark-mode")
    body.classList.toggle("light-mode")
    switchBtnEl.classList.toggle("header__btn-switch--light")
    switchImgs[0].classList.toggle("header__img-switch--active")
    switchImgs[1].classList.toggle("header__img-switch--active")
}

switchEl.addEventListener("click", switchMode)