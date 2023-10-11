const homeBrand = document.querySelector(".home__brand");
const homeScroll = document.querySelector(".home__scroll");
const aboutContent = document.querySelector(".about__content");
const skillsContent = document.querySelector(".skills__content");
const projectsContent = document.querySelector(".projects__content");
const contactContent = document.querySelector(".contact__content");

const cb = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("home__scroll")) {
                entry.target.classList.add("home__scroll--visible");
            } else {
                entry.target.classList.remove("element--hidden");
            }
        }
    });
};

const options = {
    threshold: 0.8,
};

const observer = new IntersectionObserver(cb, options);
observer.observe(homeBrand);
observer.observe(homeScroll);
observer.observe(aboutContent);
observer.observe(skillsContent);
observer.observe(projectsContent);
observer.observe(contactContent);
