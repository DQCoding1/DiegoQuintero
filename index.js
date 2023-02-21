import "./javascript/presentationAnimation/presentationAnimation.js";
import "./javascript/header/header.js";
import './javascript/main/projectsSection/projectsSection.js';
import './javascript/footer/footer.js';

const allContent = document.querySelector(".allContent");

const showAllContent = () => {
  setTimeout(() => {
    // allContent.style.display = "block";
  }, 5000);
  setTimeout(() => {
    // allContent.style.opacity = "1";
  }, 5500);
};

showAllContent();
