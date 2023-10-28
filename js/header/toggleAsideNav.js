const menuIcon = document.querySelector(".header__menuIcon");
const asideClose = document.querySelector(".aside__close");
const aside = document.querySelector(".aside");

function toggleAsideNav() {
    aside.classList.toggle("aside--visible");
}

menuIcon.addEventListener("click", toggleAsideNav);
asideClose.addEventListener("click", toggleAsideNav);

