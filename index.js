import "./javascript/presentationAnimation.js";
import "./javascript/header.js";

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
