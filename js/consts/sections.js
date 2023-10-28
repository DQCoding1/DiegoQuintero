export const sections = {
    HOME: "home",
    ABOUT: "about",
    SKILLS: "skills",
    PROJECTS: "projects",
    CONTACT: "contact",
};

export const sectionLinkedToSectionEl = {
    [sections.HOME]: document.querySelector(".home"),
    [sections.ABOUT]: document.querySelector(".about"),
    [sections.SKILLS]: document.querySelector(".skills"),
    [sections.PROJECTS]: document.querySelector(".projects"),
    [sections.CONTACT]: document.querySelector(".contact"),
};

export const sectionLinkedToHeaderAnchorEl = {
    [sections.HOME]: document.querySelector(".header__a--home"),
    [sections.ABOUT]: document.querySelector(".header__a--about"),
    [sections.SKILLS]: document.querySelector(".header__a--skills"),
    [sections.PROJECTS]: document.querySelector(".header__a--projects"),
    [sections.CONTACT]: document.querySelector(".header__a--contact"),
};

export const sectionLinkedToAsideAnchorEl = {
    [sections.HOME]: document.querySelector(".aside__a--home"),
    [sections.ABOUT]: document.querySelector(".aside__a--about"),
    [sections.SKILLS]: document.querySelector(".aside__a--skills"),
    [sections.PROJECTS]: document.querySelector(".aside__a--projects"),
    [sections.CONTACT]: document.querySelector(".aside__a--contact"),
};
