const anchors = document.querySelectorAll("a");
const sectionHome = document.querySelector("[data-section='home']");
const sectionAbout = document.querySelector("[data-section='about']");
const sectionProjects = document.querySelector("[data-section='projects']");
const sectionContact = document.querySelector("[data-section='contact']");

const goToSection = (e) => {
    switch (e.target.dataset.go_to) {
        case sectionHome.dataset.section: {
            sectionHome.scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
            break;
        }
        case sectionAbout.dataset.section: {
            sectionAbout.scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
            break;
        }
        case sectionProjects.dataset.section: {
            sectionProjects.scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
            break;
        }
        case sectionContact.dataset.section: {
            sectionContact.scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
            break;
        }
    }
};

anchors.forEach((anchor) => {
    anchor.addEventListener("click", goToSection);
});
