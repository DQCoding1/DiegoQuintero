const allSections = document.querySelectorAll(".main__section");
const navAnchors = document.querySelectorAll(".header__a");
const homeAnchor = document.getElementById("anchorHome");
const aboutAnchor = document.querySelector("[data-go_to='about']");
const skillsAnchor = document.querySelector("[data-go_to='skills']");
const projectsAnchor = document.querySelector("[data-go_to='projects']");
const contactAnchor = document.querySelector("[data-go_to='contact']");

const cb = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navAnchors.forEach((item) => {
                if (item.classList.contains("header__a--active")) {
                    item.classList.remove("header__a--active");
                }
            });

            switch (entry.target.dataset.section) {
                case homeAnchor.dataset.go_to:
                    homeAnchor.classList.add("header__a--active");
                    break;
                case aboutAnchor.dataset.go_to:
                    aboutAnchor.classList.add("header__a--active");
                    break;
                case skillsAnchor.dataset.go_to:
                    skillsAnchor.classList.add("header__a--active");
                    break;
                case projectsAnchor.dataset.go_to:
                    projectsAnchor.classList.add("header__a--active");
                    break;
                case contactAnchor.dataset.go_to:
                    contactAnchor.classList.add("header__a--active");
                    break;
            }
        }
    });
};

const options = {
    threshold: 0.6  ,
};

const observer = new IntersectionObserver(cb, options);
allSections.forEach((item) => {
    observer.observe(item);
});
