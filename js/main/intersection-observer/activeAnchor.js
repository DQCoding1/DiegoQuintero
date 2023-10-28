import { sectionLinkedToHeaderAnchorEl } from "../../consts/sections.js";
import { sectionLinkedToAsideAnchorEl } from "../../consts/sections.js";
const allSections = document.querySelectorAll(".main__section");
const headerAnchors = document.querySelectorAll(".header__a");
const asideAnchors = document.querySelectorAll(".aside__a");

const cb = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            [...headerAnchors, ...asideAnchors].forEach((item) => {
                if (item.classList.contains("header__a--active")) {
                    item.classList.remove("header__a--active");
                }
            });

            sectionLinkedToHeaderAnchorEl[
                entry.target.dataset.section
            ].classList.add("header__a--active");

            sectionLinkedToAsideAnchorEl[
                entry.target.dataset.section
            ].classList.add("header__a--active");
        }
    });
};

const options = {
    threshold: 0.6,
};

const observer = new IntersectionObserver(cb, options);
allSections.forEach((item) => {
    observer.observe(item);
});
