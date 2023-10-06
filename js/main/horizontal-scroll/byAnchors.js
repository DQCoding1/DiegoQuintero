const anchors = document.querySelectorAll("a");
const homeSection = document.querySelector("[data-section='home']");
const aboutSection = document.querySelector("[data-section='about']");
const projectsSection = document.querySelector("[data-section='projects']");
const contactSection = document.querySelector("[data-section='contact']");
const skillsSection = document.querySelector("[data-section='skills']");

const goToSection = (e) => {
    switch (e.target.dataset.go_to) {
        case homeSection.dataset.section: {
            homeSection.scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
            break;
        }
        case aboutSection.dataset.section: {
            aboutSection.scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
            break;
        }
        case skillsSection.dataset.section: {
            skillsSection.scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
            break;
        }
        case projectsSection.dataset.section: {
            projectsSection.scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
            break;
        }
        case contactSection.dataset.section: {
            contactSection.scrollIntoView({
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
