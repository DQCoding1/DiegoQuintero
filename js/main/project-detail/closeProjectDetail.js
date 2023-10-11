const backBtn = document.querySelectorAll(".projectDetail__back");
const allProjectDetail = document.querySelectorAll(".projectDetail");
const projectsContent = document.querySelector(".projects__content");

const closeProjectDetail = () => {
    projectsContent.classList.remove("projects__content--hidden");
    allProjectDetail.forEach((item) => {
        if (item.classList.contains("projectDetail--active")) {
            item.classList.remove("projectDetail--active");
        }
    });
};

backBtn.forEach((item) => {
    item.addEventListener("click", closeProjectDetail);
});
