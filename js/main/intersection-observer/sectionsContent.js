import { sections } from "../../consts/sections.js";
const allSections = document.querySelectorAll(".main__section");
const homeBrand = document.querySelector(".home__brandContainer");
const homeScroll = document.querySelector(".home__scroll");
const aboutContent = document.querySelector(".about__content");
const skillsContent = document.querySelector(".skills__content");
const projectsContent = document.querySelector(".projects__content");
const contactContent = document.querySelector(".contact__content");

const cb = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            switch (entry.target.dataset.section) {
                case sections.HOME:
                    homeBrand.classList.remove("element--hidden");
                    homeScroll.classList.add("home__scroll--visible");
                    break;
                case sections.ABOUT:
                    aboutContent.classList.remove("element--hidden");
                    break;
                case sections.SKILLS:
                    skillsContent.classList.remove("element--hidden");
                    break;
                case sections.PROJECTS:
                    projectsContent.classList.remove("element--hidden");
                    break;
                case sections.CONTACT:
                    contactContent.classList.remove("element--hidden");
                    break;
            }
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
