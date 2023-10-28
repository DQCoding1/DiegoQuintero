const menuIcon = document.querySelector(".header__menuIcon");
const headerUl = document.querySelector(".header__ul");
const aside = document.querySelector(".aside");

export const toggleElementsForAside = () => {
    const isWindowSmall = window.innerWidth <= 680;
    headerUl.style.display = isWindowSmall ? "none" : "flex";
    menuIcon.style.display = isWindowSmall ? "block" : "none";
    aside.style.display = isWindowSmall ? "block" : "none";
};

toggleElementsForAside();
window.addEventListener("resize", toggleElementsForAside);
