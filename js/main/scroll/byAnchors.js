import { sectionLinkedToSectionEl } from "../../consts/sections.js";
const allHeaderAnchors = document.querySelectorAll(".header__a");
const allAsideAnchors = document.querySelectorAll(".aside__a");
const aside = document.querySelector(".aside");
const homeSectionScrollEl = document.querySelector(".home__scroll");

const goToSection = (e) => {
    sectionLinkedToSectionEl[e.target.dataset.go_to].scrollIntoView({
        behavior: "smooth",
        inline: "center",
    });

    if (!e.target.classList.contains("header__a--brand")) {
        aside.classList.toggle("aside--visible");
    }

    if (e.target.dataset.go_to !== "home") {
        homeSectionScrollEl.classList.add("element--hidden");
    }
};

allHeaderAnchors.forEach((anchor) => {
    anchor.addEventListener("click", goToSection);
});

allAsideAnchors.forEach((anchor) => {
    anchor.addEventListener("click", goToSection);
});
