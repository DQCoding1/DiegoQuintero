const seeMoreBtns = document.querySelectorAll(".projects__button");
const videoGameProject = document.querySelector("[data-project='video-game']");
const guitarChordsProject = document.querySelector(
    "[data-project='guitar-chords']"
);
const portfolioProject = document.querySelector("[data-project='portfolio']");
const arielProject = document.querySelector("[data-project='ariel']");
const projectsContent = document.querySelector(".projects__content");

const openProjectDetail = (e) => {
    switch (e.target.dataset.go_to) {
        case arielProject.dataset.project:
            projectsContent.classList.remove("projects__content--active");
            arielProject.classList.add("projectDetail--active");
            break;
        case guitarChordsProject.dataset.project:
            projectsContent.classList.remove("projects__content--active");
            guitarChordsProject.classList.add("projectDetail--active");
            break;
        case videoGameProject.dataset.project:
            projectsContent.classList.remove("projects__content--active");
            videoGameProject.classList.add("projectDetail--active");
            break;
        case portfolioProject.dataset.project:
            projectsContent.classList.remove("projects__content--active");
            portfolioProject.classList.add("projectDetail--active");
            break;
    }
};

seeMoreBtns.forEach((item) =>
    item.addEventListener("click", openProjectDetail)
);
