const socialMedia = document.querySelectorAll(".footer__socialMedia");

const options = {
  threshold: 0,
};

const moveMediaIcons = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animateMediaIcons");
    }
  });
};

const intersection = new IntersectionObserver(moveMediaIcons, options);
socialMedia.forEach(media => intersection.observe(media));
