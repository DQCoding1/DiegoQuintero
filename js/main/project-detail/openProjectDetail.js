const seeMoreBtns = document.querySelectorAll(".projects__button");
const arielProject = document.querySelector("[data-project='ariel']");
const adaiProject = document.querySelector("[data-project='adai']");
const guitarChordsProject = document.querySelector(
    "[data-project='guitar-chords']"
);
const projectsContent = document.querySelector(".projects__content");

const openProjectDetail = (e) => {
    projectsContent.classList.add("projects__content--hidden");

    switch (e.target.dataset.go_to) {
        case arielProject.dataset.project:
            arielProject.classList.add("projectDetail--active");
            break;
        case guitarChordsProject.dataset.project:
            guitarChordsProject.classList.add("projectDetail--active");
            break;
        case adaiProject.dataset.project:
            adaiProject.classList.add("projectDetail--active");
            break;
    }
};

seeMoreBtns.forEach((item) =>
    item.addEventListener("click", openProjectDetail)
);
