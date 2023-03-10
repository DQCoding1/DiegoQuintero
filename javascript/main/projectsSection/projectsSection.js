const btnsDetails = document.querySelectorAll(".projects__details");
const cards = document.querySelectorAll(".projects__card");
const cardsInitialView = document.querySelectorAll(".projects__cardInitialView");
const cardsViewDetails = document.querySelectorAll(".projects__cardInitialView--details");
const btnsFlip = document.querySelectorAll(".projects__flipCard")

const findElementThatMatches = (elementsArr, btnId) => {
  for (let i = 0; i < elementsArr.length; i++) {
    const element = elementsArr[i];
    if (element.id === btnId) return element
  }
}

const handleClick = (e) => {
  const btnId = e.target.id
  const cardMatches = findElementThatMatches(cards, btnId)
  const initialViewMatches = findElementThatMatches(cardsInitialView, btnId)
  const viewDetailsMatches = findElementThatMatches(cardsViewDetails, btnId)
  initialViewMatches.classList.toggle("hideInitialView")
  viewDetailsMatches.classList.toggle("showViewDetail")
  if (window.innerWidth > 600){
    cardMatches.classList.toggle("rotateCard25deg")
  } else {
    cardMatches.classList.toggle("rotateCard360deg")
  }
}

btnsDetails.forEach(btn => btn.addEventListener("click", handleClick))
btnsFlip.forEach(btn => btn.addEventListener("click", handleClick))
