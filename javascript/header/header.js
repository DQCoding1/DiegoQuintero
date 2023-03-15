const profession = document.querySelector(".header__profession");
const body = document.querySelector("body")
const modeContainer = document.querySelector(".header__mode") 
const darkMode = document.querySelector(".header__dark")
const toggleMode = document.querySelector(".header__toggleMode")
const lightMode = document.querySelector(".header__light")

const moveProfession = () => {
  const currentScrollY = window.scrollY;
  if (window.innerWidth > 600) {
    if (currentScrollY < 350) {
      profession.style.marginRight = currentScrollY + "px";
    }
  } else if (window.innerWidth < 480) {
    if (currentScrollY < 200){
      profession.style.transform = "translateY(-" + currentScrollY +  "px";
    }
  }
};

window.addEventListener("scroll", moveProfession);

const changeMode = (e) => {
  if(e.target.classList.contains("header__dark")){
    body.classList.add("darkMode")
    body.classList.remove("lightMode")
  } else if (e.target.classList.contains("header__toggleMode")){
    if(body.classList.contains("darkMode")){
      body.classList.add("lightMode")
      body.classList.remove("darkMode")
    } else {
      body.classList.add("darkMode")
      body.classList.remove("lightMode")
    }
  } else if (e.target.classList.contains("header__light")){
    body.classList.add("lightMode")
    body.classList.remove("darkMode")

  }
}

modeContainer.addEventListener("click", changeMode)


