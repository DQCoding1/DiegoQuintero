const menuIcon = document.querySelector(".header__menuIcon");
const headerUl = document.querySelector(".header__ul");
const aside = document.querySelector(".aside");

export const showMenuIcon = () => {
    if (window.outerWidth <= 680) {
        menuIcon.style.display = "block";
        headerUl.style.display = "none";
        aside.style.display = "block";
    }
};

showMenuIcon();
window.addEventListener("resize", showMenuIcon);
