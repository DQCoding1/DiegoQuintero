const presentation = document.querySelector(".presentationAnimation");

const removePresentation = () => {
  setTimeout(() => presentation.style.display = "none", 5000);
};

removePresentation();